import React, { useState, useEffect } from "react";
import SocialContact from "./SocialContact";

import { useTheme } from "next-themes";

const Presentation = () => {
  const { theme } = useTheme();
  const light = theme === "light";

  return (
    <div
      id="presentation"
      className="
    max-sm:w-full 
    md:w-full
    xl:flex
    xl:flex-col
    xl:justify-center
    xl:w-full
    
    "
    >
      <div
        className="
      
      md:flex
      md:flex-row
      md:justify-center
      md:space-x-4
      xl:flex
      xl:flex-col
      xl:space-x-0
      xl:w-1/2
      "
      >
        <h1
          className={
            light
              ? "xl:text-8xl xl:font-bold  text-blue-950 max-sm:text-5xl md:text-6xl "
              : "xl:text-8xl xl:font-bold text-[#88ffcc] max-sm:text-5xl md:text-6xl "
          }
        >
          JESUS
        </h1>
        <h1 className="xl:text-8xl xl:font-bold max-sm:text-5xl md:text-6xl">
          SANCHEZ
        </h1>
      </div>
      <div
        className="
          md:flex
          md:w-full
          md:justify-center
          xl:flex
          xl:justify-start
          xl:w-auto
          
      "
      >
        <span
          className="
      text-4xl
      text-gray-500
      font-semibold
      pt-2
       mb-5
       opacity-100
       max-sm:text-2xl
      "
        >
          Frontend Developer Jr
        </span>
      </div>
      <div
        className="
      md:w-full
      md:flex
      md:justify-center
      xl:flex
      xl:justify-start
      "
      >
        <div
          className="
      
      md:w-3/6
      md:flex
      md:justify-center
      md:flex-col
      xl:w-3/6
      "
        >
          <p
            className="
       text-gray-500
       font-semibold

      "
          >
            Soy un desarrollador web apasionado por la tecnologia, por la
            innovacion y por todo lo que nos tiene el futuro en el mundo IT.
          </p>

          <p
            className="
      text-gray-500
      font-semibold
      mt-2
      "
          >
            Me encuentro en busqueda de mi primer desafio como desarrollador web
            y asi poder seguir ampliando mi conocimiento y continuar con mi
            aprendizaje.
          </p>
        </div>
      </div>

      <div
        className="
      md:flex
      md:justify-center
      xl:flex
      xl:justify-start
      "
      >
        <SocialContact />
      </div>
    </div>
  );
};

export default Presentation;
