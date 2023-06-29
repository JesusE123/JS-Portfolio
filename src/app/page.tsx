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
  const { theme, setTheme } = useTheme();
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
    flex
    items-center
    min-h-[70vh]
    mt-10
    w-full
    max-sm:block
    "
      >
        <div
          className="
        flex 
        justify-center 
        w-3/6 
        max-sm:w-full
        max-sm:flex
        max-sm:justify-start
        max-sm:px-10
        
        "
        >
          <Presentation />
        </div>
        <div
          className="
        flex 
        justify-center 
        w-3/6 
        max-sm:flex
        max-sm:justify-center
        max-sm:w-full
        max-sm:px-10
        max-sm:mt-5
        
        "
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={500}
            height={30}
            className="
            rounded 
            shadow-lg 
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
          max-sm:mt-10
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
        min-h-[70vh]"
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
            ? " min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-black text-white max-sm:grid max-sm:grid-cols-1"
            : "min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-white text-black max-sm:grid max-sm:grid-cols-1"
        }
      >
        <div className="flex justify-center max-sm:justify-start max-sm:px-3 max-sm:mt-4">
          <Copyright />
        </div>
        <div className="flex justify-center max-sm:justify-start max-sm:px-3 max-sm:mt-4">
          <PersonalInformation />
        </div>
      </div>
    </>
  );
}
