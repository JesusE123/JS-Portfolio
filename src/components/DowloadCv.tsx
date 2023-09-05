"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const DowloadCv = () => {
  const { theme } = useTheme();
  const light = theme === "light";
  const router = useRouter();

  const handleDownload = () => {
    router.push("/CVJS.pdf");
  };

  return (
    <div className="xl:flex items-center mr-4 sm:hidden md:hidden">
      <button
        onClick={handleDownload}
        className={
          light
            ? " bg-transparent border border-[#0456A9]  rounded   px-2 py-1  hover:opacity-40 shadow-lg transition ease-in-out delay-400 duration-300 "
            : "bg-transparent border border-[#88ffcc]  rounded   px-2 py-1  hover:opacity-40 shadow-lg transition ease-in-out delay-400 duration-300"
        }
      >
        Descargar CV
      </button>
    </div>
  );
};

export default DowloadCv;
