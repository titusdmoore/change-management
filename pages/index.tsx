import type { NextPage } from 'next';
import SideNavigation from '../components/SideNavigation';
import { useState } from 'react';
import MainNavigation from '../components/MainNavigation';

const Home: NextPage = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(1);

  const getActiveWorkspace = (workspaceId: number, workspaces: any[]): any | null => {
    return data.workspaces.find(e => e.id === workspaceId);
  }

  const data = {
    "workspaces": [
      {
        "id": 1,
        "name": "Edge Webware",
        "description": "This is a description",
        "projects": [
          {
            "projectId": 12,
            "projectName": "Wanted Rewards"
          },
          {
            "projectId": 13,
            "projectName": "Carbide"
          },
          {
            "projectId": 15,
            "projectName": "Kable Product Solutions"
          },
          {
            "projectId": 16,
            "projectName": "Light'n Up"
          }
        ]
      },
      {
        "id": 2,
        "name": "U! Creative",
        "description": "This is a a text description",
        "projects": [
          {
            "projectId": 14,
            "projectName": "MarFlex Supplies"
          },
          {
            "projectId": 17,
            "projectName": "McAir"
          },
        ]
      }
    ]
  }

  return (
    <main className='flex flex-row'>
      <SideNavigation projects={
        getActiveWorkspace(activeWorkspace, data.workspaces).projects
          ? getActiveWorkspace(activeWorkspace, data.workspaces).projects
          : {}
      } />
      <MainNavigation />
    </main>
  );
}

export default Home
