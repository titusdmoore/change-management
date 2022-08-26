import ProjectNavigation from "./ProjectNavigation";
import { useState } from "react";
import WorkArea from "./WorkArea";

export default function ProjectWorkArea(props: any) {
  const { workspace } = props;
  const dashboardIndex = -999;
  const [ activeProject, setActiveProject ] = useState<number>(dashboardIndex);

  return (
    <div className="w-full h-full flex">
      <ProjectNavigation clients={workspace.clients} activeProject={activeProject} setActiveProject={setActiveProject} dashboardIndex={dashboardIndex} />
      <WorkArea activeProject={activeProject} />
    </div>
  );
}