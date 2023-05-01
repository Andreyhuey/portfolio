import React, { useState, useEffect } from "react";
// theme
import { useTheme } from "next-themes";
// icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
// import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
// link
import { Link } from "react-scroll";

export default function Nav() {
  // Dark Mode Function
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // const HandleThemeSwitch = () => {
  //   setTheme(currentTheme === "dark" ? "light" : "dark");
  // };

  // // Render null until the theme loads to avoid mismatch errors
  // if (!mounted) return null;

  return (
    <div>
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          {/* nav inner */}
          <div className="w-full bg-black/30 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              <BiHomeAlt />
            </Link>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              <BiUser />
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              <BsClipboardData />
            </Link>
            <Link
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              <BsBriefcase />
            </Link>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center"
            >
              <BsChatSquare />
            </Link>
            {/* <button onClick={HandleThemeSwitch} className="text-2xl">
              {currentTheme === "dark" ? (
                <BsFillSunFill />
              ) : (
                <BsFillMoonStarsFill />
              )}
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
