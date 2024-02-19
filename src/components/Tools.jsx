"use client";

import Image from "next/image";

import { tools } from "@/constants/constants";

export default function Tools() {
  return (
    <section>
      {tools.map((tool, index) => {
        const { image, title } = tool;

        <div className="" key={index}>
          <p>{title}</p>
          <Image src={image} alt={title} />
        </div>;
      })}
    </section>
  );
}
