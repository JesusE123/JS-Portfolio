import React, { forwardRef } from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiReact,
  SiJest,
  SiTailwindcss,
  SiJquery,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { useTheme } from "next-themes";

const skills = [
  { id: 1, icon: <AiFillHtml5 /> },
  { id: 2, icon: <IoLogoCss3 /> },
  { id: 3, icon: <BsFillBootstrapFill /> },
  { id: 4, icon: <SiTailwindcss /> },
  { id: 5, icon: <IoLogoJavascript /> },
  { id: 6, icon: <SiTypescript /> },
  { id: 7, icon: <SiJquery /> },
  { id: 8, icon: <SiReact /> },
  { id: 9, icon: <TbBrandNextjs /> },
  { id: 10, icon: <SiJest /> },
];

const Skills = () => {
  const { theme } = useTheme();

  const light = theme === "light";
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl py-3 text-center">HABILIDADES TECNICAS</h1>
      <div
        className="
      flex
      justify-center
      items-center
      "
      >
        <ul
          className="
           grid 
           grid-cols-5 
           gap-8 
           mt-10
           text-6xl
           content-center
           h-56
           md:text-5xl
           sm:text-5xl
           sm:gap-4
           "
        >
          {skills.map((icon, index) => (
            <li
              key={index}
              className={
                light
                  ? "border border-[#0456A9] rounded py-2 px-2 "
                  : "border border-[#88ffcc] rounded py-2 px-2"
              }
            >
              {icon.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default forwardRef(Skills);
