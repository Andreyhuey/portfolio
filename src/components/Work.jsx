"use client";

import React, { useState } from "react";
import { projects } from "../constants/constants";

import { Card } from ".";

export default function Work() {
  const [type, setType] = useState(0);
  const setProjectType = (index) => {
    setType(index);
  };

  const projectTypes = ["All", "Front-End", "Backend", "APIs"];

  return (
    <section className="section" id="work">
      <div className="sm:container mx-auto">
        <div className="">
          <div className="flex flex-col items-center justify-center gap-y-12 text-center">
            {/* text */}
            <div>
              <h2 className="h1 leading-tight text-accent">My Latest Work.</h2>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 py-10 px-2">
            {projectTypes.map((item, i) => (
              <button
                key={i}
                onClick={() => setProjectType(i)}
                className={` ${
                  type === i
                    ? "btn btn-lg"
                    : "text-gradient btn-link cursor-pointer"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {type === 0 && (
              <>
                {projects?.map((project, index) => {
                  return <Card project={project} index={index} />;
                })}
              </>
            )}

            {type === 1 && (
              <>
                {projects
                  ?.filter((project) => project?.type?.includes("Front End"))
                  ?.map((project, index) => (
                    <Card key={index} project={project} />
                  ))}
              </>
            )}
            {type === 2 && (
              <>
                {projects
                  ?.filter((project) => project?.type?.includes("Back End"))
                  ?.map((project, index) => (
                    <Card key={index} project={project} />
                  ))}
              </>
            )}
            {type === 3 && (
              <>
                {projects
                  ?.filter((project) => project?.type?.includes("API"))
                  ?.map((project, index) => (
                    <Card key={index} project={project} />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
