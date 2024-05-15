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
import { Carousel } from "./ui/carousel";

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
  { id: 10, icon: <SiMongodb style={iconCommonStyle} /> ,skill:"MongoDB"},
  { id: 11, icon: <FaNode style={iconCommonStyle} />,skill:"Node JS" },
  { id: 12, icon: <SiExpress style={iconCommonStyle} /> ,skill:"Express"},
  { id: 1, icon: <SiMysql style={iconCommonStyle} /> ,skill:"MySQL"},
];

const Skills = () => {
  return (
    <>
    hola
    </>
  );
};

export default Skills;
