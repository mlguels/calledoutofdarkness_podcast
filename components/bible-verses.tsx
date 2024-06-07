"use client";

import React from "react";
import Image from "next/image";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { bibleVerses } from "@/constant/constants";

export function BibleVerses() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-cream items-center justify-center relative overflow-hidden">
      <div className="flex flex-col gap-3 items-center bg-cream">
        <Image
          src="/images/bibleimage.png"
          alt="Bible"
          width={200}
          height={200}
        />
        <p className="md:text-2xl text-lg font-marxiana text-brown-primary">
          All the scripture referenced will be from King James Version (KJV)
        </p>
      </div>
      <InfiniteMovingCards items={bibleVerses} direction="right" speed="slow" />
    </div>
  );
}
