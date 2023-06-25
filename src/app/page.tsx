"use client";
import Image from "next/image";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { BsArrowDownShort } from "react-icons/bs";
import { PersonalInformation } from "./components/PersonalInformation";
import { useEffect,useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme()
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
    mt-10
    flex
    items-center
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
    "
      >
        <div className="flex justify-center">
          <Presentation />
        </div>
        <div
          className="w-2/4"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={350}
            height={30}
            className="rounded shadow-lg"
          />
        </div>
      </div>

      <div
        className="
          text-center 
          flex 
          justify-center
          text-5xl
          
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
        mt-5
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


      <div className=
      {light ? ' min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-black text-white' 
      : 
      'min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-white text-black'}>
        <div className="flex justify-center">
          <Copyright />
        </div>
        <div className="flex justify-center">
          <PersonalInformation />
        </div>

      </div>
    </>
  );
}
