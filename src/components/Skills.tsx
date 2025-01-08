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
import MobileSkills from "./MobileSkills";
import ScrollReveal from "./ScrollReveal";
import Section from "./Section";
import Net from "./Net";

const iconCommonStyle = {
  width: 80,
  height: 80,
};

const skills = [
  { id: 1, icon: <TiHtml5 style={iconCommonStyle} />, skill: "Html" },
  { id: 2, icon: <IoLogoCss3 style={iconCommonStyle} />, skill: "Css" },
  {
    id: 3,
    icon: <BsFillBootstrapFill style={iconCommonStyle} />,
    skill: "Bootstrap",
  },
  {
    id: 4,
    icon: <SiTailwindcss style={iconCommonStyle} />,
    skill: "Tailwindcss",
  },
  {
    id: 5,
    icon: <IoLogoJavascript style={iconCommonStyle} />,
    skill: "Javascript",
  },
  {
    id: 6,
    icon: <SiTypescript style={iconCommonStyle} />,
    skill: "Typescript",
  },
  { id: 7, icon: <SiRedux style={iconCommonStyle} />, skill: "Redux" },
  { id: 8, icon: <SiReact style={iconCommonStyle} />, skill: "React" },
  { id: 9, icon: <TbBrandNextjs style={iconCommonStyle} />, skill: "Next JS" },
  { id: 10, icon: <SiMongodb style={iconCommonStyle} />, skill: "MongoDB" },
  { id: 11, icon: <FaNode style={iconCommonStyle} />, skill: "Node JS" },
  { id: 12, icon: <SiExpress style={iconCommonStyle} />, skill: "Express" },
  { id: 13, icon: <SiMysql style={iconCommonStyle} />, skill: "MySQL" },
  { id: 14, icon: <Net />, skill: ".NET" },
  
];

const Skills = () => {
  return (
    <>
      <ScrollReveal>
        <Section id="habilidades">
          <div className="flex flex-col w-full">
            <h2 className="text-4xl py-3 text-center font-bold">
              HABILIDADES TÉCNICAS 🚀
            </h2>
            {/* Para pantallas grandes */}
            <div className="hidden lg:grid grid-cols-5 gap-7 place-content-center items-center">
              {skills.map((element, index) => (
                <div
                  key={index}
                  className="animate-pulse flex justify-center items-center flex-col shadow-lg py-1 px-2 w-[200px] h-[200px]"
                >
                  {element.icon}
                  <p>{element.skill}</p>
                </div>
              ))}
            </div>
            {/* Para pantallas pequeñas */}
            <div className="lg:hidden flex justify-center items-center">
              <MobileSkills data={skills} />
            </div>
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
};

export default Skills;
