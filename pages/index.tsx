import type { NextPage } from 'next';
import SideNavigation from '../components/SideNavigation';
import { useState } from 'react';
import MainNavigation from '../components/MainNavigation';
import ProjectWorkArea from '../components/ProjectWorkArea';

const Home: NextPage = () => {
  const [activeWorkspace, setActiveWorkspace] = useState<number>(1);

  const getActiveWorkspace = (workspaceId: number, workspaces: Workspace[]): any | null => {
    return workspaces.find(e => e.id === workspaceId);
  }

  const data: { user: User, workspaces: Workspace[] } = {
    "user": {
      "id": 8,
      "roles": [ 0, 3, 4 ],
      "name": "Titus Moore"
    },
    "workspaces": [
      {
        "id": 1,
        "name": "Edge Webware",
        "description": "This is a description",
        "clients": [
          {
            "clientId": 1,
            "name": "Billy",
            "projects": [
              {
                "projectId": 12,
                "projectName": "Wanted Rewards"
              },
              {
                "projectId": 13,
                "projectName": "Carbide"
              },
            ]
          },
          {
            "clientId": 5,
            "name": "McAffee",
            "projects": [
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
            "clientId": 9,
            "name": "Internal Projects",
            "projects": [
              {
                "projectId": 66,
                "projectName": "Change Management"
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "U! Creative",
        "description": "This is a a text description",
        "clients": [
          {
            "clientId": 32,
            "name": "Hampton Fitness",
            "projects": [
              {
                "projectId": 17,
                "projectName": "McAir"
              },
            ]
          },
          {
            "clientId": 12,
            "name": "Breat Oakley",
            "projects": [
              {
                "projectId": 14,
                "projectName": "MarFlex Supplies"
              },
              {
                "projectId": 19,
                "projectName": "MarFlex Construction"
              },
            ]
          }
        ]
      }
    ]
  }

  return (
    <main className='flex flex-row'>
      <SideNavigation workspaces={data.workspaces} setActiveWorkspace={setActiveWorkspace} />
      <div className='w-full h-screen overflow-hidden'>
        <MainNavigation workspace={getActiveWorkspace(activeWorkspace, data.workspaces)} />
        <ProjectWorkArea workspace={getActiveWorkspace(activeWorkspace, data.workspaces)} />
      </div>
    </main>
  );
};

export default Home;
