import { FaUserCircle } from 'react-icons/fa';
import { BsBoxArrowRight } from 'react-icons/bs';

export default function SideNavigation(props: any) {
    const projects: any[] = props.projects;
    const toggled: boolean = props.toggled;
    const toggledHandler: any = props.toggledHandler;

    return (
        <aside className={`bg-primary h-screen ${toggled ? "w-72" : "w-16"}`}>
            <button className='w-full h-16 bg-primary-dark flex justify-center items-center child:hover:text-body'>
                <FaUserCircle className='text-header text-3xl' />
            </button>
            <div className="w-full flex flex-col items-center pt-4">
                {
                    projects.map((project, index) => {
                        return (
                            <button className={`w-full h-fit mb-4 flex items-center ${toggled ? 'px-8' : 'px-2'}`} key={project.projectName}>
                                <div className='w-12 min-w-[3rem] h-12 bg-white rounded-md shadow-md'></div>
                                <span className={`text-header ml-4 text-left ${toggled ? "inline-block" : "hidden"}`}>{project.projectName}</span>
                            </button>
                        );
                    })
                }
                <div>
                    <button className='bg-white px-4 py-1 rounded shadow-md' onClick={() => {
                        toggledHandler(!toggled);
                    }}>
                        <BsBoxArrowRight className='text-primary' />
                    </button>
                </div>
            </div>
        </aside>
    );
}