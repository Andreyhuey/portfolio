import React from "react";
import Image from "next/image";
// images
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <Image src={Logo} alt="logo" />
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <a href="https://canva.com" target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
