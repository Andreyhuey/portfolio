import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ project, index }) => {
  const { title, description, image, tags, source, visit, id } = project;
  return (
    <div
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
      key={index}
    >
      <div className="group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300 group-hover:w-full"></div>

      <Image
        src={image}
        alt={title}
        className="group-hover:scale-125 transition-all duration-500"
      />

      <div className="absolute -bottom-full p-8 group-hover:bottom-10 md:group-hover:bottom-5 transition-all duration-500 z-50 md:flex flex-col gap-y-4">
        <span className="text-3xl text-gradient font-bold">{title}</span>

        <span className="text-white hidden lg:flex">{description}</span>
      </div>
    </div>
  );
};

export default Card;
