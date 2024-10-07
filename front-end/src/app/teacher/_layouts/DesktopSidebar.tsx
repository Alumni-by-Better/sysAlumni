'use client';

import { Menu, MenuLine } from 'MenuTypes';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserTie, FaWindowClose, FaCheckSquare } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import { teacherMenus } from '@lib/menus/teacherMenus';
import { IoHomeSharp } from 'react-icons/io5';

export default function DesktopSidebar({ version }: { version: string }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-white shadow-lg">
      <div className="flex grow flex-col overflow-y-auto bg-gray-100 px-6 pb-4">
        <div className="pt-4 flex items-center mb-4">
          <div className="mb-4">
            <Link href="/teacher">
              <Image
                alt="logo horizontal"
                src="/images/logos.png"
                width={130}
                height={67}
                priority={true}
              />
            </Link>
          </div>
        </div>
        
        {/* Adicionando estilo à versão */}
        <p className="text-sm font-bold text-gray-600 mb-4">Versão: {version}</p>

        {/* Estilizando o título 'Início' */}
        <div className="text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Início</div>

        <nav className="flex flex-1 flex-col space-y-4">
          {/* Dashboard Link */}
          <ul className="group flex items-center rounded-md text-sm font-medium">
            <Link
              href={'/teacher'}
              className="bg-blue-500 text-white group flex gap-x-2 rounded-md p-2 text-sm font-medium w-full"
            >
              <IoHomeSharp className="h-5 w-5 shrink-0" aria-hidden="true" />
              Dashboard
            </Link>
          </ul>

          {/* Menus Dinâmicos */}
          <ul className="flex flex-1 flex-col gap-y-4">
            {teacherMenus.map((menuList: Menu, index: number) => {
              return (
                <li key={`cat-menu-${index}`}>
                  <div className="text-lg font-semibold text-gray-600 border-b border-gray-300 pb-1">{menuList.name}</div>
                  <ul className="mt-2 space-y-1">
                    {menuList.menu.map((item: MenuLine, indexLine: number) => {
                      return (
                        <li key={`line-menu-${indexLine}`}>
                          <Link
                            href={item.href}
                            className="text-gray-600 hover:bg-gray-200 group flex gap-x-2 rounded-md p-2 text-sm font-medium"
                          >
                            <item.icon className="h-5 w-5 text-gray-600" aria-hidden="true" />
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
    </div>
  );
}
