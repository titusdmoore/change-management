import { BsDot } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function MainNavigation(props: any) {
  const workspace: any = props.workspace;

  return (
    <div className='bg-white w-full h-16 px-6 flex items-center justify-between border-b border-gray-300'>
      <h1 className="text-footer text-2xl flex flex-row">
        {workspace.name}
        <span className='text-secondary-light flex flex-row items-center text-xl'><BsDot />Workspace</span>
      </h1>
      <div className='flex flex-row items-center h-full'>
        <form action="">
          <input type="search" placeholder='Search Activity...' className='border border-gray-200 rounded-md px-4 py-1' />
        </form>
        <div className='flex items-center border-l border-slate-300 ml-8 pl-6 h-full'>
          <IoMdNotifications className='text-3xl mr-4' />
          <Menu as="div" className="relative">
            <Menu.Button className='flex items-center'>
              <div className='w-8 h-8 bg-primary rounded-full'></div>
              <FaAngleDown className='ml-2' />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ul className='px-4 py-2'>
                  <Menu.Item><li>Hello World</li></Menu.Item>
                  <Menu.Item><li>Hello World</li></Menu.Item>
                  <Menu.Item><li>Hello World</li></Menu.Item>
                  <Menu.Item><li>Logout</li></Menu.Item>
                </ul>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}