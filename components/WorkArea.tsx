import Card from './Card';
import { parseDataResponse, getTasksByStatus } from '../utils/db';
import { Status } from '../enums';

export default function WorkArea(props: any) {
  const { activeProject } = props;

  return (
    <section className="w-full h-full p-6">
      <div className='grid grid-cols-3 h-full'>
        <Card className='col-span-2 mr-2'>
          <h2 className='text-primary text-2xl'>Changes Waiting for Approval</h2>
        </Card>
        <Card className="ml-2">
          <h2 className='text-primary text-2xl'>Changes Ready to Deploy</h2>
        </Card>
        <Card className="mt-4 mr-2">
          <h2 className='text-primary text-2xl'>Recently Deployed Changes</h2>
        </Card>
        <Card className="mt-4 mx-2">
          <h2 className='text-primary text-2xl'>Tickets Ready for Approval</h2>
        </Card>
        <Card className="mt-4 ml-2">
          <h2 className='text-primary text-2xl'>Active Projects</h2>
        </Card>
      </div>
    </section>
  );
}
