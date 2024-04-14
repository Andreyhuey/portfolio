"use client";

import React from "react";
import CountUp from "react-countup";

import { Link } from "react-scroll";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="sm:container mx-auto">
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className=" my-10 flex flex-col gap-4 items-center justify-center text-center max-w-lg">
              <h2 className="h2 text-accent ">About me.</h2>
              <h3 className="h3">
                Turning design dreams into stunning web experiences.
              </h3>
              <div className="flex flex-col gap-6">
                <p>
                  i am passionate about building aesthetically beautiful &
                  functional web applications. I also love creating, consuming &
                  designing APIs (Application Programming Interfaces) and their
                  data.
                </p>
                <p>
                  Join me on this journey through the realms of technology,
                  where I blend the artistry of front-end development with the
                  precision of back-end engineering. From building sleek user
                  interfaces to architecting scalable server systems, I thrive
                  on the dynamic challenges that come with shaping the digital
                  landscape.
                </p>
              </div>

              {/* stats */}
              <div className="flex gap-x-6 lg:gap-x-10 mt-6 mb-12 justify-between md:justify-start lg:justify-start">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    <CountUp end={5} duration={3} enableScrollSpy />
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Years of <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    <CountUp enableScrollSpy end={60} duration={3} />

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
                    <CountUp enableScrollSpy end={30} duration={3} />

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
