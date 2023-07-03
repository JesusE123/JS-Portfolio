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
    tablet:w-full 
    tablet:mt-6
    md:mt-6
    laptop:flex
    laptop:flex-col
    laptop:justify-center
    laptop:w-full
    laptop:items-start
    laptop:mt-4
    "
    >
      <div
        className="
      tablet:flex
      tablet:justify-center
      tablet:space-x-2
      md:flex
      md:flex-row
      md:space-x-2
      md:justify-center
      laptop:flex
      laptop:flex-col
      laptop:space-x-0
   
      
      "
      >
        <h1
          className={
            light
              ? "laptop:text-7xl laptop:font-semibold  text-blue-950 tablet:text-5xl md:text-6xl"
              : "laptop:text-7xl laptop:font-semibold text-[#88ffcc] tablet:text-5xl md:text-6xl"
          }
        >
          JESÚS
        </h1>
        <h1
          className="
          tablet:text-5xl 
          md:text-6xl
          laptop:text-6xl
          xl:text-7xl 
          xl:font-semibold
        "
        >
          SANCHEZ
        </h1>
      </div>
      <div
        className="
          tablet:flex
          tablet:justify-center
          md:flex
          md:justify-center
          laptop:flex
          laptop:justify-center
          laptop:py-0
          
          
      "
      >
        <span
          className="
       text-4xl
       mb-5
       opacity-100
       tablet:text-2xl

      "
        >
          Frontend Developer Jr
        </span>
      </div>

      <div
        className="
      tablet:flex
      tablet:justify-center
      md:flex
      md:justify-center
      laptop:flex
      laptop:justify-start
      laptop:w-full
      "
      >
        <div
          className="
      tablet:w-2/3
      md:w-2/3
      laptop:w-3/4
      laptop:flex
      laptop:justify-start
      laptop:items-start
      "
        >
          <p
            className="
       text-gray-500
       font-semibold
        
      "
          >
            Soy un desarrollador web apasionado por la tecnologia, por la
            innovacion y por todo lo que nos tiene el futuro en el mundo IT.{" "}
            <br /> Me encuentro en busqueda de mi primer desafio como
            desarrollador web y asi poder seguir ampliando mi conocimiento y
            continuar con mi aprendizaje.
          </p>
        </div>
      </div>

      <div
        className="
      tablet:flex
      tablet:justify-center
      md:flex
      md:justify-center
      laptop:flex
      laptop:justify-center
      "
      >
        <SocialContact />
      </div>
    </div>
  );
};

export default Presentation;
