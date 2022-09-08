import type { NextPage } from 'next';
import SideNavigation from '../components/SideNavigation';
import { useState } from 'react';
import MainNavigation from '../components/MainNavigation';
import ProjectWorkArea from '../components/ProjectWorkArea';
import executeQuery, { parseDataResponse, getWorkspaces } from '../utils/db';

const Home: NextPage = (props: any) => {
  const [activeWorkspace, setActiveWorkspace] = useState<number>(1); 
  const { workspaces }: { workspaces: Workspace[] } = props;
  

  const getActiveWorkspace = (workspaceId: number, workspaces: Workspace[]): any | null => {
    return workspaces.find(e => e.id === workspaceId);
  }

  return (
    <main className='flex flex-row'>
      <SideNavigation workspaces={workspaces} setActiveWorkspace={setActiveWorkspace} />
      <div className='w-full h-screen flex flex-col'>
        <MainNavigation workspace={getActiveWorkspace(activeWorkspace, workspaces)} />
        <ProjectWorkArea workspace={getActiveWorkspace(activeWorkspace, workspaces)} />
      </div>
    </main>
  );
};

export async function getServerSideProps(context: any) {
  const workspaces = await getWorkspaces();

  return {
    props: {
      workspaces: parseDataResponse(workspaces)
    }
  }
}

export default Home;
