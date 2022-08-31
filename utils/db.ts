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

export async function getWorkspace(id: number) {
  let workspaces = parseDataResponse(await excuteQuery(
    "SELECT w.id as 'workspaceId', w.name as 'workspaceName', p.id as 'projectId', p.name as 'projectName', p.description as 'projectDescription', s.name as 'projectStatus' FROM workspace as w INNER JOIN project as p ON p.workspaceId = w.id INNER JOIN status as s ON s.id = p.statusId WHERE w.id = ?;", 
    [id]
  ));

  let test = workspaces.map(async (workspace: any) => {
    return getWorkspaceTasks(workspace.projectId).then((result) => {
      return {
        ...workspace,
        tasks: parseDataResponse(result)
      }
    }).catch(() => {
      return workspace;
    });
  });

  Promise.all(test).then((resolved) => {
    console.log(resolved)
    return test
  })
}

export async function getWorkspaceTasks(projectId: number) {
  return await excuteQuery(
    "SELECT t.* FROM projectTasks as pt INNER JOIN task AS t WHERE pt.projectId = ? AND t.id = pt.taskId;", 
  [projectId]);
}

export function parseDataResponse(data: any) {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch( e ) {
    console.error("Invalid object passed to JSON");
    return data;
  }
}

export default async function excuteQuery( query: any, values?: any[] ) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}