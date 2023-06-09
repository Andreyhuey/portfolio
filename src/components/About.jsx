"use client";

import React from "react";
import Image from "next/image";
// countup
import CountUp from "react-countup";
// intersection observer
// import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
import ab from "../assets/wave.png";
// variant
import { fadeIn } from "../variants.js";

import { Link } from "react-scroll";

export default function About() {
  // const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about">
      <div className="sm:container mx-auto">
        <div>
          <div className="flex flex-col xs:flex xs:items-center xs:justify-center lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
            {/* img */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 justify-center items-center"
            >
              <Image src={ab} alt="about" />
            </motion.div>
            {/* text */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:flex-1 flex-1 my-10 items-center justify-center"
            >
              <h2 className="h2 text-accent">About me.</h2>
              <h3 className="h3 mb-4">
                Turning design dreams into stunning web experiences.
              </h3>
              <p className="mb-6">
                i am passionate about building aesthetically beautiful &
                functional web applications. I also love consuming information
                from APIs (Application Programming Interfaces) and designing
                their data.
              </p>
              {/* stats */}
              <div className="flex gap-x-6 lg:gap-x-10 mb-12 justify-between md:justify-start lg:justify-start">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    <CountUp start={0} end={36} duration={3} />
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Months of <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    <CountUp start={0} end={15} duration={3} />

                    {"+"}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    <CountUp start={0} end={20} duration={3} />

                    {"+"}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Satisfied <br />
                    Clients
                  </div>
                </div>
              </div>
              <div className="flex gap-x-8 items-center justify-center md:justify-start">
                <Link to="contact" smooth={true} spy={true} offset={-200}>
                  <button className="btn btn-lg">Contact me</button>
                </Link>
                <Link
                  to="work"
                  className="text-gradient btn-link cursor-pointer"
                >
                  My Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
