import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { BsNutFill } from "react-icons/bs";

export default function ProjectNavigation(props: any) {
  const clients = props.clients;
  const [activeClients, setActiveClients] = useState<number[]>([]);

  return (
    <div className="h-full bg-white w-56 p-4">
      <ul>
        <button className="w-full text-left p-4 px-2">
          <span className="text-black text-lg">Dashboard</span>
        </button>
        {
          clients.map((client: any, index: any) => {
            let open = activeClients.includes(index) ? true : false;
            
            return (
              <Disclosure as="li" key={`client-${index}`}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full text-left p-2 hover:bg-primary-active child:hover:text-primary rounded-t-lg">
                      <span className="text-black text-lg">{client.name}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="drop-shadow-md px-2">
                      <ul>
                        {
                          client.projects.map((project: any, index: any) => {
                            return (
                              <li className="text-body" key={`project-${index}`}>{project.projectName}</li>
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