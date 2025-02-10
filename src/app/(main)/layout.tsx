import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Management Tools",
  description: "The Project Management Tool (PMT) aims to help teams organize, track, and complete projects collaboratively. The tool will allow users to create tasks, assign them to team members, monitor progress, and communicate in real time.",
  icons: {
    icon: ['/logo.svg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex flex-row">
          <aside className="max-w-72 min-w-56 w-full border-e border-gray-200 h-screen sm:hidden md:block">
            <div>
              <Sidebar />
            </div>
          </aside>
          <div className="w-full">
            <header>
              <Navbar />
            </header>
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
