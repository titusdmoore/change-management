import ProjectNavigation from "./ProjectNavigation";

export default function ProjectWorkArea(props: any) {
  const workspace = props.workspace;

  return (
    <div className="w-full h-full">
      <ProjectNavigation clients={workspace.clients} />
    </div>
  );
}