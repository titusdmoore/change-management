import Card from './Card';

export default function WorkArea(props: any) {
  const { activeProject } = props;

  return (
    <section className="w-full h-full p-6">
      <div className='grid grid-cols-3'>
      <Card className='col-span-2 mr-2'>
        <h2 className='text-primary text-2xl'>Jello World</h2>
      </Card>
      <Card className="ml-2">
        <h2>Card 2</h2>
      </Card>
      </div>
    </section>
  );
}