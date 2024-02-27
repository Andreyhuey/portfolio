"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { tools } from "../constants/constants";

export default function Tools() {
  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // Number of slides to show at a time
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768, // Adjust the number of slidesToShow for smaller screens
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  // return (
  //   <section className="overflow-x-scroll py-16 w-fit  overflow-y-scroll ">
  //     <Slider {...sliderSettings}>
  //       {tools &&
  //         tools.map((tool, index) => {
  //           const { image, title } = tool;
  //           return (
  //             <div className="w-full h-full" key={index}>
  //               {/* <p>{title}</p> */}
  //               <Image
  //                 src={image}
  //                 alt={title}
  //                 className="w-full lg:w-[100px] h-[100px] "
  //               />
  //             </div>
  //           );
  //         })}
  //     </Slider>
  //   </section>
  // );
}
