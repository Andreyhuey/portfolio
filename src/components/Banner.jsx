import React from "react";
import Avatar from "../assets/avatar.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// variants
import Image from "next/image";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <section
      className="section
      "
      id="home"
    >
      <div className="sm:container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left order-2 lg:order-1">
            <h1 className="text-[35px] font-bold leading-[0.8] lg:text-[45px] mb-1">
              OLUWADARA <span>OLA-OBAADO</span>
            </h1>
            <div className="mb-6 flex flex-col items-center justify-center lg:justify-start lg:items-start lg:text-start text-[36px] h-14 pt-3 lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "API developer",
                  2000,
                  "Front-End Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Technical Writer",
                  2000,
                ]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="mb-8 max-w-lg mx-auto lg:mx-0 font-semibold">
              <p className="my-2">
                Hello!, Welcome to my developer portfolio 🚀
              </p>{" "}
              <br />
              <p>
                Step into my world of code and creativity, where pixels come
                alive and ideas turn into digital realities. I&apos;m thrilled
                to have you here, exploring my skills, projects, and passion for
                pragmatic technology.
              </p>
            </div>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact" smooth={true} spy={true} offset={-200}>
                <button className="btn btn-lg">Contact Me</button>
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
            {/* socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-slate-300 lg:max">
              <a
                href="https://www.linkedin.com/in/oluwadara-ola-obaado-64b5511b4/"
                target="_blank"
                className="cursor-pointer"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://github.com/andreyhuey"
                target="_blank"
                className="cursor-pointer"
              >
                <FaGithub className="text-4xl" />
              </a>
              <a
                href="https://twitter.com/andreyhuey"
                target="_blank"
                className="cursor-pointer"
              >
                <FaTwitter className="text-4xl" />
              </a>
            </div>
          </div>
          {/* image */}

          <Image
            src={Avatar}
            alt="avatar"
            className="rounded-3xl flex-1 lg:max-w-[482px] mx-auto order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
}
