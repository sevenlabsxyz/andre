"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  const NAME = "André Neves";

  return (
    <Link href="/" className="-ml-2 p-2 flex flex-row items-center">
      <Image
        alt={NAME}
        width={30}
        height={30}
        className="rounded-full mr-2"
        src={"https://i.imgur.com/glq48i7.jpeg"}
      />
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        {NAME}
      </span>
    </Link>
  );
}
