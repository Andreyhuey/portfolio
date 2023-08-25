"use client";

import React from "react";
import { projects } from "../constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="sm:container mx-auto">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-y-12 mb-10 text-center">
            {/* text */}
            <div>
              <h2 className="h1 leading-tight text-accent">My Latest Work.</h2>
            </div>
            {/* image */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* image */}
            {projects &&
              projects.map((project, index) => {
                // destructure service
                const {
                  title,
                  type,
                  description,
                  image,
                  tags,
                  source,
                  visit,
                  id,
                } = project;

                return (
                  <div
                    className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
                    key={id}
                  >
                    <div className="group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300 group-hover:w-full"></div>

                    <Image
                      src={image}
                      alt=""
                      className="group-hover:scale-125 transition-all duration-500"
                    />

                    {/* for pcs and tabs */}
                    <div className="hidden  absolute -bottom-full left-8 group-hover:bottom-10 md:group-hover:bottom-5 transition-all duration-500 z-50 md:flex flex-col gap-y-4">
                      <span className="text-3xl text-white font-bold">
                        {title}
                      </span>

                      <div className="">
                        <span className="text-gradient">{type}</span>
                      </div>

                      <span className="flex flex-row justify-start items-start gap-x-2">
                        {tags.map((tag, i) => (
                          <span
                            key={i}
                            className=" 
                      font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>

                      <div className="flex justify-start gap-14 items-center w-full">
                        <Link href={visit}>
                          <button className="btn btn-sm">Visit Site</button>
                        </Link>
                      </div>
                    </div>

                    {/* for mobile devices */}
                    <div className=" h-auto  absolute -bottom-full left-6 max-w-[300px] group-hover:bottom-5 transition-all duration-500 z-50 md:hidden flex-col gap-y-10">
                      <span className="text-3xl text-white font-bold">
                        {title}
                      </span>

                      <div className="">
                        <span className="text-gradient">{type}</span>
                      </div>

                      <span className="flex flex-row justify-start items-start gap-x-2">
                        {tags.map((tag, i) => (
                          <span
                            key={i}
                            className=" 
                      font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>

                      <div className="flex justify-start gap-14 items-center w-full">
                        <Link href={visit}>
                          <button className="btn btn-sm">Visit Site</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
