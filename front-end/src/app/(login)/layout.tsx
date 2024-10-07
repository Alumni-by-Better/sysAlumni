"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <main
      className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8 bg-cover bg-center-top min-h-full"
      style={{ backgroundImage: `url(/images/fundo.png)` }}
    >
      {children}
    </main>
  );
}
