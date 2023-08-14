import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// img
import { projects } from "../constants/constants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Image from "next/image";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="sm:container mx-auto">
        <div className="">
          <div className="flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h1 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati cumque error exercitationem, nam nulla saepe delectus
                modi tempore suscipit.
              </p>
              <button className="btn btn-sm">View All Projects</button>
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
                  service,
                  visit,
                  id,
                } = project;

                return (
                  <div className="">
                    <div
                      className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
                      key={id}
                    >
                      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                      <Image
                        src={image}
                        alt=""
                        className="group-hover:scale-125 transition-all duration-500"
                      />

                      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                        <span className="text-gradient">{type}</span>
                      </div>

                      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                        <span className="text-3xl text-white font-bold">
                          {title}
                        </span>
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
