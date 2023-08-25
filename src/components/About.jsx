"use client";

import React from "react";
import Image from "next/image";
// countup
import CountUp from "react-countup";
import Avatar from "../assets/avatar.jpeg";
// variant
import { fadeIn } from "../variants.js";

import { Link } from "react-scroll";

export default function About() {
  // const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about">
      <div className="sm:container mx-auto">
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className=" my-10 flex flex-col items-center justify-center text-center">
              <h2 className="h2 text-accent ">About me.</h2>
              <h3 className="h3 mb-4">
                Turning design dreams into stunning web experiences.
              </h3>
              <p className="mb-6 md:max-w-[700px]">
                i am passionate about building aesthetically beautiful &
                functional web applications. I also love consuming information
                from APIs (Application Programming Interfaces) and designing
                their data.
              </p>
              {/* stats */}
              <div className="flex gap-x-6 lg:gap-x-10 mb-12 justify-between md:justify-start lg:justify-start">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    <CountUp start={0} end={38} duration={3} />
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
                  smooth={true}
                  spy={true}
                  offset={-200}
                  className="text-gradient btn-link cursor-pointer"
                >
                  My Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
