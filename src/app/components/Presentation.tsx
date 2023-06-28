import React, { useState, useEffect } from "react";
import SocialContact from "./SocialContact";

import { useTheme } from "next-themes";

const Presentation = () => {
  const { theme } = useTheme();
  const light = theme === "light";

  return (
    <div id="presentation" className="w-3/6 max-sm:w-full">
      <h1
        className={
          light
            ? "text-9xl font-bold  text-blue-950 max-sm:text-5xl sm:text-7xl"
            : "text-9xl font-bold text-[#88ffcc] max-sm:text-5xl sm:text-7xl"
        }
      >
        Jesús
      </h1>
      <h1 className="text-9xl font-bold max-sm:text-5xl">Sanchez</h1>
      <div
        className="
      
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
      <p
        className="
       text-gray-500
       font-semibold
      "
      >
        Soy un desarrollador web apasionado por la tecnologia, por la innovacion
        y por todo lo que nos tiene el futuro en el mundo IT.
      </p>

      <p
        className="
      text-gray-500
      font-semibold
      mt-2
      "
      >
        Me encuentro en busqueda de mi primer desafio como desarrollador web y
        asi poder seguir ampliando mi conocimiento y continuar con mi
        aprendizaje.
      </p>

      <div>
        <SocialContact />
      </div>
    </div>
  );
};

export default Presentation;
