import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';

export default function Navigation(props: any) {
    const [toggled, setToggled] = useState(false);

    let workspaces = [
        {
            "workspaceId": 12,
            "workspaceName": "Wanted Rewards"
        },
        {
            "workspaceId": 13,
            "workspaceName": "Carbide"
        },
        {
            "workspaceId": 14,
            "workspaceName": "MarFlex Supplies"
        },
        {
            "workspaceId": 15,
            "workspaceName": "Kable Product Solutions"
        },
        {
            "workspaceId": 16,
            "workspaceName": "Light'n Up"
        }
    ]

    return (
        <aside className={`bg-primary h-screen ${toggled ? "w-72" : "w-16"} transition-all`}>
            <button className='w-full h-16 bg-primary-dark flex justify-center items-center child:hover:text-body'>
                <FaUserCircle className='text-header text-3xl' />
            </button>
            <div className="w-full flex flex-col items-center pt-4">
                {
                    workspaces.map((workspace, index) => {
                        return (
                            <button className='w-full h-fit mb-4 flex items-center justify-center'>
                                <div className='w-12 h-12 bg-white rounded-md shadow-md'></div>
                                {
                                    toggled
                                        ? (<span className='text-header ml-4'>{workspace.workspaceName}</span>)
                                        : null
                                }
                            </button>
                        );
                    })
                }
                <div>
                    <button className='bg-white px-4 py-1 rounded shadow-md' onClick={() => {
                        setToggled(!toggled);
                    }}>
                        <BsBoxArrowRight className='text-primary' />
                    </button>
                </div>
            </div>
        </aside>
    );
}