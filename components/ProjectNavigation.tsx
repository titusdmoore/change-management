import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { BsNutFill } from "react-icons/bs";

export default function ProjectNavigation(props: any) {
  const { 
    clients, 
    activeProject, 
    setActiveProject, 
    dashboardIndex 
  }: { clients: Client[], activeProject: number, setActiveProject: (newValue: number | null) => void, dashboardIndex: number } = props;
  const [ activeClients, setActiveClients ] = useState<number[]>([]);

  return (
    <div className="h-full bg-white w-60 p-4">
      <ul>
        <button className={`w-full text-left p-2 hover:bg-primary-active mb-2 child:hover:text-primary rounded-lg ${activeProject === dashboardIndex ? "bg-primary child:text-header" : ""}`} onClick={() => {
          setActiveProject(dashboardIndex);
        }}>
          <span className="text-black text-lg">Dashboard</span>
        </button>
        {
          clients.map((client: any, index: any) => {
            let open = activeClients.includes(index) ? true : false;
            
            return (
              <Disclosure as="li" key={`client-${index}`} className="mb-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className={`w-full text-left p-2 hover:bg-primary-active child:hover:text-primary rounded-t-lg ${open ? "bg-primary child:text-header" : "rounded-b-lg"}`}>
                      <span className="text-black text-lg">{client.name}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-2 border-x-2 border-b-2 py-2 rounded-b-lg">
                      <ul>
                        {
                          client.projects.map((project: any, index: any) => {
                            return (
                              <li className="text-black" key={`project-${index}`}>{project.projectName}</li>
                            );
                          })
                        }
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })
        }
      </ul>
    </div>
  );
}