import ELogo from '../public/E_WHITE.png';
import Image from 'next/image';
import { ReactElement, ReactNode } from 'react';

export default function SideNavigation(props: SideNavProps): ReactElement {
    const { workspaces, setActiveWorkspace }: SideNavProps = props;

    return (
        <aside className="bg-primary h-screen w-16">
            <button className='w-full h-16 bg-primary-dark flex justify-center items-center child:hover:text-body'>
                <Image
                  src={ELogo}
                />
            </button>
            <div className="w-full flex flex-col items-center pt-4">
                {
                    workspaces.map((workspace, index) => {
                        return (
                            <button className='w-full h-fit mb-4 flex items-center px-2' key={workspace.name} onClick={() => {
                                setActiveWorkspace(workspace.id)
                            }}>
                                <div className='w-12 min-w-[3rem] h-12 bg-white rounded-md shadow-md'></div>
                            </button>
                        );
                    })
                }
            </div>
        </aside>
    );
}