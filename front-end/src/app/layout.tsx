import type { Metadata } from "next";
import "./globals.css";
import { GlobalsTypeProvider } from "@/contexts/GlobalsContext";

// Adicione o campo `icons` com o caminho do favicon
export const metadata: Metadata = {
  title: "Alumni Education System",
  description:
    "Alumni Education System: Integration of a teacher and student dashboard, including class scheduling through a calendar, video conferencing using the Zoom API, and the incorporation of the LearnLab educational platform.",
  icons: {
    icon: "https://alumni.org.br/wp-content/uploads/2024/05/favico_alumni.svg", // URL do favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full">
      <head>
        {/* Next.js já irá lidar com a inclusão do ícone com base no campo 'icons' */}
      </head>
      <body
        className={`font-sans antialiased bg-gray-100 text-gray-600 min-h-full h-full flex flex-col [overflow-anchor:none]`}
      >
        <GlobalsTypeProvider>{children}</GlobalsTypeProvider>
      </body>
    </html>
  );
}
