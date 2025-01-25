'use client';

import { ErrorButton, PrimaryButton, WarningButton } from "@/components/Shared/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <Image src="/pmt-logo.svg" alt="Logo" width={100} height={100} className="size-12" />
      </div>
      <h2 className="text-5xl content-center my-8 text-center font-bold">Welcome to project management tools</h2>
      <div className="flex justify-center space-x-4 my-8">
        <PrimaryButton type="button" onClick={() => console.log("Hello")}>Click me</PrimaryButton>
        <WarningButton type="button" onClick={() => console.log("Hello")}>Click me</WarningButton>
        <ErrorButton type="button" onClick={() => console.log("Hello")}>Click me</ErrorButton>
      </div>
      <div>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus alias laudantium ipsum error ratione? Iste eos sapiente nulla vero magnam odio voluptatum aspernatur. Dolore animi tenetur ea porro libero earum delectus dicta fuga iure voluptatibus, illum dignissimos, obcaecati minima dolores numquam at aut officiis maxime. Doloremque et cum eius.
        </article>
      </div>
    </div>
  );
}
