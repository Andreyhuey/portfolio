import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ project, index }) => {
  const { title, description, image, tags, source, visit, tools, id } = project;
  return (
    <div
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
      key={index}
    >
      <div className="group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300 group-hover:w-full"></div>

      <Image
        src={image}
        alt={title}
        className="group-hover:scale-125 transition-all duration-500 w-fit"
      />

      <div className="absolute -bottom-full p-8 group-hover:bottom-0 md:group-hover:bottom-5 transition-all duration-500 z-50 flex flex-col gap-y-4 w-full">
        <span className="text-3xl text-gradient font-bold">{title}</span>

        <span className="text-white hidden lg:flex">{description}</span>

        <span className="flex gap-2 w-fit items-center">
          {tools.map((tool, index) => (
            <p key={index} className="capitalize font-light">
              #{tool}
            </p>
          ))}
        </span>

        <div className="flex justify-between text-3xl">
          <Link href={source}>
            <FaGithub />
          </Link>
          <Link href={visit}>
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
