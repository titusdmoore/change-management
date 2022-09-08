import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT ? process.env.MYSQL_PORT : ""),
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});

// export async function getWorkspace(id: number) {
//   let workspaces = parseDataResponse(await executeQuery(
//     "SELECT w.id as 'workspaceId', w.name as 'name', p.id as 'projectId', p.name as 'projectName', p.description as 'projectDescription', s.name as 'projectStatus' FROM workspace as w INNER JOIN project as p ON p.workspaceId = w.id INNER JOIN status as s ON s.id = p.statusId WHERE w.id = ?;",
//     [id]
//   ));

//   return await Promise.all(workspaces.map((workspace: any) => {
//     return getWorkspaceTasks(workspace.projectId).then((result) => {
//       return {
//         ...workspace,
//         tasks: parseDataResponse(result)
//       }
//     }).catch(() => {
//       return workspace;
//     });
//   }));
// }

export async function getWorkspaces() {
  let rawWorkspaces = parseDataResponse(await executeQuery("SELECT * FROM workspace;"));

  return await Promise.all(rawWorkspaces.map( populateWorkspace ));
}

export async function populateWorkspace( workspace: any ) {
  let clients = await getClientsByWorkspaceId( workspace.id );

  if ( clients ) {
    return {
      ...workspace,
      clients: clients
    };
  } else {
    return workspace;
  }
}

export async function getClientsByWorkspaceId( workspaceId: number ) {
  let rawClients = parseDataResponse(
    await executeQuery(
      "SELECT * FROM client WHERE client.workspaceId = ?;",
      [ workspaceId ]
    )
  );

  return await Promise.all(rawClients.map( populateClient ));
}

export async function populateClient( client: any ) {
  let projects = await getProjectsByClientId ( client.id );

  if ( projects ) {
    return {
      ...client,
      projects: projects
    }
  } else {
    return client;
  }
}

export async function getProjectsByClientId( clientId: number ) {
  let rawProjects = parseDataResponse( 
    await executeQuery(
      "SELECT * FROM project WHERE project.clientId = ?",
      [ clientId ]
    )
  );

  return await Promise.all(rawProjects.map( populateProject ));
}


export async function populateProject( project: any ) {
  let tasks = await getTasksByProjectId( project.id );
  
  if ( tasks ) {
    return {
      ...project,
      tasks: tasks
    }
  } else {
    return project;
  }
}

export async function getTasksByStatus( status: number | string, limit?: number ) {
  if ( typeof status === "string" ) {
    return await executeQuery(
      `SELECT t.* FROM task as t INNER JOIN status as s WHERE t.statusId = s.id AND s.name = ? ${limit ? "LIMIT ?": ""}`,
      [ status, limit ]
    );
  } else {
    return await executeQuery(
      `SELECT * FROM task WHERE task.statusId = ? ${limit ? "LIMIT ?": ""}`,
      [ status, limit ]
    );
  }
}

export async function getTasksByProjectId( projectId: number ) {
  return await executeQuery(
    "SELECT t.* FROM projectTasks as pt INNER JOIN task AS t WHERE pt.projectId = ? AND t.id = pt.taskId;",
    [ projectId ]);
}

export function parseDataResponse(data: any) {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error("Invalid object passed to JSON");
    return data;
  }
}

export default async function executeQuery(query: any, values?: any[]) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}