"use client";
import Image from "next/image";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

import { useTheme } from "next-themes";

import { BsArrowDownShort } from "react-icons/bs";
import { PersonalInformation } from "./components/PersonalInformation";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const light = theme === "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        className="
    flex
    justify-center
    items-center
    h-16
    mt-5
    "
      >
        <Header />
      </div>

      <div
        className="
    tablet:block
    laptop:flex
    laptop:justify-evenly
    laptop:items-center
    laptop:min-h-[70vh]
    laptop:flex-row

    "
      >
        <div
          className="
        tablet:w-full
        tablet:flex
        tablet:justify-center
        tablet:px-10
        laptop:flex 
        laptop:justify-center 
        laptop:w-3/6
        
       
        
        
        "
        >
          <Presentation />
        </div>
        <div
          className="
        tablet:flex
        tablet:justify-center
        tablet:w-full
        tablet:px-10
        tablet:mt-10
        md:flex
        md:justify-center
        md:mt-10
        laptop:w-1/3
        
       
        
        "
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={450}
            height={30}
            className="
            rounded 
            shadow-lg
            laptop:w-96
            "
          />
        </div>
      </div>

      <div
        className="
          text-center 
          flex 
          justify-center
          text-5xl
          tablet:mt-10
          md:mt-10
          "
      >
        <BsArrowDownShort className="animate-bounce" />
      </div>

      <div
        className="
        flex 
        justify-center 
        text-center 
        items-center
        font-semibold
        mt-5
        min-h-[70vh]
        md:min-h-[60vh]
        md:mt-10
        "
      >
        <Skills />
      </div>

      <div
        className="
        flex 
        justify-center 
        items-center
        font-semibold
        mt-2
        min-h-[70vh]
        md-h-[60vh]
        "
      >
        <Projects />
      </div>

      <div
        className="
        min-h-[70vh]
        mt-10
        "
      >
        <Contact />
      </div>

      <div
        className={
          light
            ? " min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-black text-white tablet:grid tablet:grid-cols-1"
            : "min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-white text-black tablet:grid tablet:grid-cols-1"
        }
      >
        <div className="flex justify-center tablet:justify-center tablet:px-3 tablet:mt-4">
          <Copyright />
        </div>
        <div className="flex justify-center tablet:justify-center tablet:px-3 tablet:mt-4">
          <PersonalInformation />
        </div>
      </div>
    </>
  );
}
