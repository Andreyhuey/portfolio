import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Card = ({ project, index }) => {
  const { title, description, image, icons, source, visit, tools, id } =
    project;
  return (
    <div
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
      key={index}
    >
      <div className="group-hover:bg-black/90 w-fit h-full absolute z-40 transition-all duration-300 group-hover:w-full"></div>

      <Image
        src={image}
        alt={title}
        className="group-hover:scale-125 transition-all duration-500"
      />

      <div className="absolute -bottom-full p-8 group-hover:bottom-0 md:group-hover:bottom-5 transition-all duration-500 z-50 flex flex-col gap-y-4 w-full">
        <span className="text-3xl text-gradient font-bold">{title}</span>

        {/* <span className="text-white hidden lg:flex">{description}</span> */}

        <span className="grid grid-cols-3 md:flex gap-1 md:gap-2 w-fit items-center">
          {tools.map((tool, index) => (
            <p key={index} className="capitalize font-light">
              #{tool}
            </p>
          ))}
        </span>

        {/* <span className="flex gap-3 w-fit items-center">
          {icons?.map((tool, index) => (
            <Image key={index} src={tool} alt={"image"} className="w-7" />
          ))}
        </span> */}

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
