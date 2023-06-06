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
    name: "Design To Code",
    description:
      "Translating UI/UX design's visual elements, layout, and user interactions into code to create a functional and visually appealing web interface.",
    link: "Learn More",
  },
  {
    name: "API Integration",
    description:
      "Utilizing external application programming interfaces within web applications to leverage existing functionalities and data from other systems.",
    link: "Learn More",
  },
  {
    name: "State Management",
    description:
      "Managing and storing data used across different parts of a web application. Ensuring that all components have access to the most up-to-date and consistent data, enabling them to work together effectively.",
    link: "Learn More",
  },
  {
    name: "Backend-as-a-service",
    description:
      "helping businesses build and deploy their applications quickly and easily by providing a number of benefits including: Reduced development time, Increased scalability & Enhanced security",
    link: "Learn More",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="sm:container mx-auto">
        <div className="flex flex-col lg:flex-row h-auto">
          {/* text & image*/}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-center items-center
            mb-12"
          >
            <h2 className="h1 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I&apos;m a front-end developer with over three years of freelance
              & a year of professional experience.
            </h3>
            <Image src={ab} alt="about" />
            {/* <div className="mx-auto lg:justify-center lg:align-center ">
            </div> */}
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.4)}
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
                    className="border-b border-white h-auto pb-3 mb-[38px] flex"
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
