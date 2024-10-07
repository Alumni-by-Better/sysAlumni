'use client';

import { Menu, MenuLine } from 'MenuTypes';

import { Fragment, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';


import { AiOutlineClose } from 'react-icons/ai';


import { teacherMenus } from '@lib/menus/teacherMenus';
import { FaUserTie, FaWindowClose, FaCheckSquare } from 'react-icons/fa';
import { useGlobalsContext } from '@/contexts/GlobalsContext';
import { IoHomeSharp } from 'react-icons/io5';


export default function MobileSidebar({ version }: { version: string }) {

  const { data, setData } = useGlobalsContext();


  
  return (
    <Transition.Root show={data.isSideBarMobile} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => {
          setData({ ...data, isSideBarMobile: false });
        }}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={(e) => {
                      setData({ ...data, isSideBarMobile: false });
                    }}>
                    <span className="sr-only">Close sidebar</span>
                    <AiOutlineClose className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 px-6 pb-4">
                <div className="pt-4 shrink-0 items-center">
                  <Image alt="logo horizontal" src="/images/logos.png" width={150} height={33} priority={true} />
                  <p className="text-sm font-bold">Versão: {version}</p>
                </div>

           

        <div className="text-md font-semibold text-gray-700 border-b border-solid border-gray-500 mb-2">Início</div>

<nav className="flex flex-1 flex-col">
  <ul role="list" className="group flex items-center rounded-md text-sm font-medium">
    <Link
      href={'/teacher'}
      className="bg-gray-300 text-gray-600 group flex gap-x-2 rounded-md p-2 text-sm font-medium w-full"
      >
      <IoHomeSharp
        className="text- h-5 w-5 shrink-0"                
        aria-hidden="true"
      />
      Dashboards
    </Link>
  </ul>
  <ul role="list" className="flex flex-1 flex-col gap-y-7">
            {teacherMenus.map((menuList: Menu, index: number) => {
         
                return (
                  <li key={`cat-menu-${index}`}>
                    <div className="text-md font-semibold text-gray-600 border-b border-solid border-gray-600 mt-4">{menuList.name}</div>
                    <ul role="list" className=" mt-2 space-y-1">
                      {menuList.menu.map((item: MenuLine, indexLine: number) => {
    
                          return (
                            <li key={`line-menu-${indexLine}`}>
                              <Link
                                href={item.href}
                                className="text-gray-500 hover:bg-gray-300 group flex gap-x-2 rounded-md p-2 text-sm font-medium"
                                >
                                <item.icon className='text-gray-500 h-5 w-5 shrink-0' aria-hidden="true" />
                                {item.name}
                              </Link>
                            </li>
                          );
                      })}
                    </ul>
                  </li>
                );
              
            })}
          </ul>
</nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
