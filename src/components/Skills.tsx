import React from "react";
import { FaNode } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconCommonStyle = {
  width: 80,
  height: 80,
};

const skills = [
  { id: 1, icon: <TiHtml5 style={iconCommonStyle} />, skill:"Html" },
  { id: 2, icon: <IoLogoCss3 style={iconCommonStyle} />,skill:"Css" },
  { id: 3, icon: <BsFillBootstrapFill style={iconCommonStyle} />,skill:"Bootstrap" },
  { id: 4, icon: <SiTailwindcss style={iconCommonStyle} />,skill:"Tailwindcss" },
  { id: 5, icon: <IoLogoJavascript style={iconCommonStyle} />,skill:"Javascript" },
  { id: 6, icon: <SiTypescript style={iconCommonStyle} />,skill:"Typescript" },
  { id: 7, icon: <SiRedux style={iconCommonStyle} />,skill:"Redux" },
  { id: 8, icon: <SiReact style={iconCommonStyle} /> ,skill:"React"},
  { id: 9, icon: <TbBrandNextjs style={iconCommonStyle} /> ,skill:"Next JS"},
  { id: 11, icon: <SiMongodb style={iconCommonStyle} /> ,skill:"MongoDB"},
  { id: 12, icon: <FaNode style={iconCommonStyle} />,skill:"Node JS" },
  { id: 13, icon: <SiExpress style={iconCommonStyle} /> ,skill:"Express"},
  { id: 13, icon: <SiMysql style={iconCommonStyle} /> ,skill:"MySQL"},
];

const Skills = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
   <div className="col-span-full">
      <h1 className="text-3xl py-3 text-center mt-7">HABILIDADES TECNICAS</h1>
    </div>
    {skills.map((element, index) => (
      <div key={index} className="shadow-lg px-2 py-1 rounded w-[252px] h-[197px] flex justify-center items-center">
        <div className="flex flex-col animate-pulse">
          {element.icon}
          <span className="text-center">{element.skill}</span>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Skills;
