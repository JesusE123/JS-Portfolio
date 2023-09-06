import React, { forwardRef } from "react";
import SocialContact from "./SocialContact";

import { useTheme } from "next-themes";

const Presentation = () => {
  const { theme } = useTheme();
  const light = theme === "light";

  return (
    <div className="w-full sm:w-[40%] flex items-center justify-center flex-col">
      <div className="w-80 flex flex-col sm:w-96 lg:w-96">
        <div className="justify-center text-4xl flex lg:text-7xl sm:flex md:flex-col sm:text-5xl">
          <h1 className={light ? "text-[#0456A9]" : "text-[#88ffcc]"}>JESÚS</h1>
          <h1 className=" ml-2 md:m-0 sm:ml-2">SANCHEZ</h1>
        </div>

        <span className=" text-center text-xl md:text-2xl sm:text-xl sm:text-center md:text-left">
          Front-End Developer Jr
        </span>

        <p className=" text-center sm:text-center md:text-left">
          Soy un desarrollador web apasionado por la tecnologia, por la
          innovacion y por todo lo que nos tiene el futuro en el mundo IT. 
          Soy una persona disciplinada apta para cualquier desafio, 
          siempre dispuesto a ayudar y aprender de los mas experimentados en este 
          camino del desarrollo web
        </p>
        <SocialContact />
      </div>
    </div>
  );
};

export default Presentation;
