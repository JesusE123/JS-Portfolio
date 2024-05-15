

import React from "react";
import SocialContact from "./SocialContact";
import { useTheme } from "next-themes";

import { TypeAnimationC } from "./TypeAnimation";
import DowloadCv from "./DowloadCv";


const Presentation = () => {
  
  
  return (
    <>
  
    
    
    <div className="w-full sm:w-[40%] flex items-center justify-center flex-col">
      
      <div className="w-80 flex flex-col sm:w-96 lg:w-96">
        <div className="justify-center text-4xl flex lg:text-7xl sm:flex md:flex-col sm:text-5xl">
          <h1 className="text-[#88ffcc]">JESÚS</h1>
          <h1 className=" ml-2 md:m-0 sm:ml-2">SANCHEZ</h1>
         
        </div>

        <span className=" text-center text-xl md:text-2xl sm:text-xl sm:text-center md:text-left pb-4">
          <TypeAnimationC />
        </span>

        <p className=" text-center sm:text-center md:text-left text-lg">
          Soy un desarrollador apasionado por la tecnologia, por la
          innovacion y por todo lo que nos tiene el futuro en el mundo IT. 
          Soy una persona disciplinada apta para cualquier desafio, 
          siempre dispuesto a ayudar y aprender de los mas experimentados en este 
          camino de aprendizaje y crecimiento.
        </p>

        <div className="flex justify-center mt-3 lg:justify-between">
        <SocialContact />
        <DowloadCv />
        </div>

      </div>
    </div>
    </>
  );
};

export default Presentation;
