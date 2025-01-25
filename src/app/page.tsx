'use client';
import { ErrorButton, PrimaryButton, WarningButton } from "@/components/Shared/Button/Button";
import { Button } from "antd";

export default function Home() {
  return (
    <main>
      <h2 className="text-5xl content-center my-8 text-center font-bold">Welcome to project management tools</h2>
      <div className="flex justify-center space-x-4 my-8">
        <PrimaryButton onClick={() => console.log("Hello")}>Click me</PrimaryButton>
        <WarningButton onClick={() => console.log("Hello")}>Click me</WarningButton>
        <ErrorButton onClick={() => console.log("Hello")}>Click me</ErrorButton>
      </div>
      <div className="flex justify-center space-x-4 my-8">
        <Button color="danger" variant="solid">Primary</Button>
        <Button className="bg-orange-500" type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
        <Button type="primary" disabled={false}>Disabled</Button>
      </div>

    </main>
  );
}
