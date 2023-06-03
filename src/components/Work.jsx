import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

export default function Work() {
  return (
    <section className="section my-20" id="work">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h2 className="h2 leading-tight text-accent">
              My Latest <br /> Work.
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              cumque error exercitationem, nam nulla saepe delectus modi tempore
              suscipit vitae beatae ab? Ipsa temporibus esse quasi praesentium,
              saepe voluptates natus.
            </p>
          </div>
          {/* image */}
          <div>image</div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
}
