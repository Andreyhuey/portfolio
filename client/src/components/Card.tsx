import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../variants";
import { getScreenshotLink } from "../utils/screenshot_one";

interface CardProps {
  project: {
    title: string;
    description: string;
    tools: string[];
    tags: string;
    type: string[];
    source?: string;
    visit: string;
    figma?: string;
    id: number;
  };
  index: number;
}

const Card = ({ project, index }: CardProps) => {
  const { title, source, visit, tools } = project;

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
      key={index}
    >
      <div className="group-hover:bg-black/90 w-fit h-full absolute z-40 transition-all duration-300 group-hover:w-full"></div>

      <Image
        src={getScreenshotLink(visit)}
        alt={`${title} Screenshot`}
        width={500}
        height={300}
        className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-all duration-500"
      />

      <div className="absolute -bottom-full p-8 group-hover:bottom-0 md:group-hover:bottom-5 transition-all duration-500 z-50 flex flex-col gap-y-4 w-full">
        <span className="text-3xl text-gradient font-bold">{title}</span>

        <span className="grid grid-cols-3 md:flex gap-1 md:gap-2 w-fit items-center">
          {tools.map((tool, index) => (
            <p key={index} className="capitalize font-light">
              #{tool}
            </p>
          ))}
        </span>

        <div className="flex justify-between text-3xl">
          {source && (
            <Link href={source} target="_blank" aria-label={title}>
              <FaGithub />
            </Link>
          )}
          <Link href={visit} target="_blank" aria-label={title}>
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
