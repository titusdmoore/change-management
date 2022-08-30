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

export function getWorkspace(id: number) {
  const query = "SELECT w.id as 'Workspace Id', w.name as 'Workspace Name', p.id as 'Project Id', p.name as 'Project Name', p.description as 'Project Description', s.name as 'Project Status' FROM workspace as w INNER JOIN project as p ON p.workspaceId = w.id INNER JOIN status as s ON s.id = p.statusId;";
}

export function parseDataResponse(data: any) {
  return JSON.parse(JSON.stringify(data));
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