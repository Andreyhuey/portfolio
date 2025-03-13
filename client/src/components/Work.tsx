"use client";

import React, { useState } from "react";
import { projects } from "../constants/constants";

import { Card } from ".";

export default function Work() {
  const [type, setType] = useState(0);
  const setProjectType = (index: number) => {
    setType(index);
  };

  const projectTypes = ["All", "Front-End", "Fullstack"];

  return (
    <section className="section" id="work">
      <div className="sm:container mx-auto">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-y-10 text-center">
            {/* text */}
            <div>
              <h2 className="h1 leading-tight text-accent">My Latest Work.</h2>
            </div>
          </div>

          <div className="flex items-center justify-between xs:gap-[0.125rem] sm:gap-2  md:justify-center md:gap-5 py-10 px-2 w-full">
            {projectTypes.map((item, i) => (
              <button
                key={i}
                onClick={() => setProjectType(i)}
                className={` ${
                  type === i
                    ? "btn btn-lg"
                    : "text-gradient btn-link cursor-pointer w-fit"
                } flex items-center justify-center text-sm  md:text-lg`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center justify-center">
            {type === 0 && (
              <>
                {projects &&
                  [...Array(projects.length)].map((_, index) => {
                    const reversedIndex = projects.length - 1 - index;
                    const project = projects[reversedIndex];
                    return (
                      <Card
                        project={project}
                        index={reversedIndex}
                        key={reversedIndex}
                      />
                    );
                  })}
              </>
            )}

            {type === 1 && (
              <>
                {projects
                  ?.filter((project) => project?.type?.includes("Front End"))
                  .slice()
                  .reverse()
                  .map((project, index, array) => {
                    const reversedIndex = array.length - 1 - index;
                    return (
                      <Card
                        key={reversedIndex}
                        project={project}
                        index={reversedIndex}
                      />
                    );
                  })}
              </>
            )}
            {type === 2 && (
              <>
                {projects
                  ?.filter((project) => project?.type?.includes("Fullstack"))
                  .slice()
                  .reverse()
                  ?.map((project, index, array) => {
                    const reversedIndex = array.length - 1 - index;
                    return (
                      <Card
                        key={reversedIndex}
                        project={project}
                        index={reversedIndex}
                      />
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
