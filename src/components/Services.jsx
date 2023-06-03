"use client";

import React from "react";
import ab from "../assets/dev.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants.js";

import { BsArrowUpRight } from "react-icons/bs";

import Image from "next/image";

//  services data
const services = [
  {
    name: "UI/UX Design Translation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui odio consectetur dolorum, nostrum, aperiam ipsa laudantium aliquam doloribus excepturi ",
    link: "Learn More",
  },
  {
    name: "API Creation & Consumption",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui odio consectetur dolorum, nostrum, aperiam ipsa laudantium aliquam doloribus ",
    link: "Learn More",
  },
  {
    name: "State Management",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui odio consectetur dolorum, nostrum, aperiam ipsa laudantium aliquam doloribus ",
    link: "Learn More",
  },
  {
    name: "Technical Writing",
    description:
      " Providing accurate, accessible, and easily understandable information to users, whether they are developers, end-users, or other stakeholders. ",
    link: "Learn More",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row h-screen">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1
            lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
            mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 3 Years of
              experience.
            </h3>
            <div>
              <Image src={ab} alt="ab" />
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
