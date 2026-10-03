import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h4>Hello NextJS</h4>
      <PricingTable />
    </div>
  );
}
