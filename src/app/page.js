'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-3xl">
      Next js App
      <Button
        variant={'outkine'}
        onClick={() => { console.log('btn click') }}
        className=' hover:cursor-pointer'
      >
        Button
      </Button>
    </div>
  );
}
