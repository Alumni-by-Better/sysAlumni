'use client';

import Link from 'next/link';

import { useGlobalsContext } from '@/contexts/GlobalsContext';


import { Menu } from '@headlessui/react';

import { FaBars, FaChevronDown } from 'react-icons/fa';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TopBar() {
  const router = useRouter();

  const { data, setData } = useGlobalsContext();

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() =>
          setData({
            ...data,
            isSideBarMobile: !data.isSideBarMobile,
          })
        }>
        <span className="sr-only">Open sidebar</span>
        <FaBars className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6 ">
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full bg-gray-50" src="/images/user-lorem.png" alt="" />
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  TEDDY
                </span>
                <FaChevronDown className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Menu.Button>

            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item key="dados">
                <Link href={'/teacher'} className="block px-3 py-1 text-sm leading-6 text-gray-700">
                  Dados
                </Link>
              </Menu.Item>
              <Menu.Item key="sair">
                <button
                  onClick={() => {
                    router.push('/')
                  }}
                  className="block px-3 py-1 text-sm leading-6 text-red-700">
                  Sair
                </button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
}
