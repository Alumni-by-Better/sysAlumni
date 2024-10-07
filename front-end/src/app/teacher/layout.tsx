import '@app/globals.css';



import MobileSidebar from './_layouts/MobileSidebar';
import DesktopSidebar from './_layouts/DesktopSidebar';
import TopBar from './_layouts/TopBar';


import { ReactNode } from 'react';

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const version = '1.0.0';



  return (
    <div>
      <MobileSidebar version={version} />
      <DesktopSidebar version={version} />
        <div className="lg:pl-72">
          <TopBar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
