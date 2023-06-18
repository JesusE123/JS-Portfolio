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

export default function Home() {

  const {theme, setTheme} = useTheme()


 const light = theme === "light";
  return (
    <>
      {/* Header */}
      <div
        className="
    mt-10
    flex
    items-center
    "
      >
        <Header />
      </div>

      {/* presentation */}
      <motion.div
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
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ ease: [0.5, 0.71, 1, 1.5], duration: 2 }}
          className="w-2/4"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={350}
            height={30}
            className="rounded shadow-lg"
          />
        </motion.div>
      </motion.div>

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
