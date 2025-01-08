"use client";

import React from "react";
import { useTheme } from "next-themes";

const DowloadCv = () => {
  const { theme } = useTheme();
  const light = theme === "light";

  const handleDownload = () => {
    window.open("/Curriculum.pdf", "_blank");
  };

  return (
    <div className=" hidden xl:flex items-center mr-4 sm:hidden md:hidden">
      <button
        onClick={handleDownload}
        className= "bg-transparent border border-[#88ffcc]  rounded mt-2   px-2 py-1  hover:opacity-40 shadow-lg transition ease-in-out delay-400 duration-300"
         >
        Descargar CV
      </button>
    </div>
  );
};

export default DowloadCv;
