export default function ProjectNavigation(props: any) {
  const shouldShrink: boolean = props.shouldShrink;

  return (
    <div className={`h-full bg-white ${shouldShrink ? "w-16" : "w-72"}`}>
      <h1>Hi</h1>
    </div>
  );
}