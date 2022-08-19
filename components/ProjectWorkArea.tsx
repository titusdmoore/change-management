import ProjectNavigation from "./ProjectNavigation";

export default function ProjectWorkArea(props: any) {
  const sideNavShouldShrink: boolean = props.sideNavShouldShrink;

  return (
    <div className="w-full h-full">
      <ProjectNavigation shouldShrink={sideNavShouldShrink} />
    </div>
  );
}