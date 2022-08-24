import { Disclosure } from "@headlessui/react";

export default function ProjectNavigation(props: any) {
  const clients = props.clients;

  return (
    <div className="h-full bg-white w-56 p-4">
      <ul>
        <button className="w-full text-left p-4 px-2">
          <span className="text-black text-lg">Dashboard</span>
        </button>
        {
          clients.map((client: any, index: any) => {
            return (
              <Disclosure as="li" key={`client-${index}`}>
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
              </Disclosure>
            );
          })
        }
      </ul>
    </div>
  );
}