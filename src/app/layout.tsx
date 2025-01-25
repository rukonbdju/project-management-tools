import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import FlyonuiScript from "@/components/FlyonUI/FlyonUi";
import Image from "next/image";
import Menus from "@/components/SideMenus/Menus"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Project Management Tools",
  description: "Project management tools for better project management",
  icons: ['/pmt-logo.svg']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <header className=" h-16 sticky top-0 border-b bg-gray-50 z-10 content-center">
          <nav className="flex justify-between items-center">
            <div className=" bg-gray-50 sticky min-w-56 max-w-64 w-full  h-16 border-b content-center">
              <div className="flex justify-between items-center gap-5 px-4">
                <Image src="/pmt-logo.svg" alt="Logo" width={100} height={100} className="size-12" />
                <p></p>
              </div>
            </div>
          </nav>
        </header>
        <div className="flex flex-row">
          <aside className="min-w-56 max-w-64 w-full h-[calc(100vh-64px)] sticky top-16 border-e overflow-y-auto p-2 aside-scroll right">
            <Menus />
          </aside>
          <main className="w-full p-2 sm:p-3 md:p-4">{children}</main>
          {/* <aside className="min-w-56 max-w-64 w-full h-[calc(100vh-64px)] sticky top-16 border-s bg-gray-50 overflow-y-auto p-2">
            Right sidebar appears here
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, mollitia veniam similique eveniet cumque eius deserunt rem ad.
          </aside> */}
        </div>
        <FlyonuiScript />
      </body>
    </html>
  );
}
