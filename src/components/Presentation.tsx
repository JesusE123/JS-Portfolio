import React, { forwardRef } from "react";
import SocialContact from "./SocialContact";

import { useTheme } from "next-themes";

const Presentation = () => {
  const { theme } = useTheme();
  const light = theme === "light";

  return (
    <div className=" w-[40%] flex items-center justify-center flex-col">
      <div className="flex flex-col lg:w-96">
        <div className="lg:text-7xl md:text-6xl">
          <h1 className={light ? "text-[#0456A9]" : "text-[#88ffcc]"}>JESUS</h1>
          <h1>SANCHEZ</h1>
        </div>

        <span className="text-3xl md:text-2xl">Front-End Developer Jr</span>

        <p>
          Soy un desarrollador web apasionado por la tecnologia, por la
          innovacion y por todo lo que nos tiene el futuro en el mundo IT. Me
          encuentro en busqueda de mi primer desafio como desarrollador web y
          asi poder seguir ampliando mi conocimiento y continuar con mi
          aprendizaje.
        </p>
        <SocialContact />
      </div>
    </div>
  );
};

export default Presentation;
