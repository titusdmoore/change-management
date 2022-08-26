import Card from './Card';

export default function WorkArea(props: any) {
  const { activeProject } = props;

  return (
    <section className="w-full h-full p-6">
      <Card>
        <h2 className='text-primary text-2xl'>Jello World</h2>
      </Card>
    </section>
  );
}