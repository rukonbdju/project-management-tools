'use client';
import Dashboard from "@/components/Dashboard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <Image src="/pmt-logo.svg" alt="Logo" width={100} height={100} className="size-64" />
      </div>
      <h2 className="text-5xl content-center my-8 text-center font-bold">Welcome to project management tools</h2>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}
