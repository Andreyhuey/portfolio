"use client";

import React from "react";
import ab from "../assets/dev.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants.js";

import { BsArrowUpRight } from "react-icons/bs";

import Image from "next/image";

import { services } from "../constants/constants";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="sm:container mx-auto">
        <div className="flex flex-col lg:flex-row h-auto">
          {/* text & image*/}
          <div
            className="flex-1 flex flex-col justify-center items-center  lg:justify-start lg:items-start
            mb-12"
          >
            <h2 className="h1 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16 text-center lg:text-start ">
              I&apos;m a front-end developer with over three years of freelance
              & a year of professional experience.
            </h3>
            <Image src={ab} alt="about" />
            {/* <div className="mx-auto lg:justify-center lg:align-center ">
            </div> */}
          </div>
          {/* services */}
          <div className="flex-1">
            {/* Services list */}
            <div>
              {services &&
                services.map((service, index) => {
                  // destructure service
                  const { name, description, link, id } = service;
                  return (
                    <div
                      className="border-b border-white h-auto pb-3 mb-[38px] flex"
                      key={id}
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
          </div>
        </div>
      </div>
    </section>
  );
}
