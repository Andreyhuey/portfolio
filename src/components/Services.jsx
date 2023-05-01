import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../pages/variants.js";

const services = [
  {
    name: "Front End Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui odio consectetur dolorum, nostrum, aperiam ipsa laudantium aliquam doloribus excepturi ea reiciendis distinctio tempore quibusdam repudiandae odit. Laborum, similique ut",
  },
  {
    name: "API Creation & Consumption",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui odio consectetur dolorum, nostrum, aperiam ipsa laudantium aliquam doloribus excepturi ea reiciendis distinctio tempore quibusdam repudiandae odit. Laborum, similique ut",
  },
  {
    name: "Data Management",
    description:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui odio consectetur dolorum, nostrum, aperiam ipsa laudantium aliquam doloribus excepturi ea reiciendis distinctio tempore quibusdam repudiandae odit. Laborum, similique ut",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        {/*  */}
        <div>text</div>
        {/*  */}
        <div>Services</div>
      </div>
    </section>
  );
}
