"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Copyright from "../components/Copyright";

import { useTheme } from "next-themes";

import { BsArrowDownShort } from "react-icons/bs";
import { PersonalInformation } from "../components/PersonalInformation";

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
    snap-y
    snap-mandatory
    overflow-auto 
    scroll-smooth
    h-screen
    w-screen
    "
      >
        <section
          className="
    small:mt-5
    small:h-16
    tablet:mt-5
    tablet:h-16   
    md:mt-5
    md:h-16
    laptop:mt-6
    desktop:flex
    desktop:justify-center
    desktop:items-center
    desktop:h-16
    desktop:mt-5
    snap-start

    "
        >
          <Header />
        </section>

        <section
          id="#SobreMi"
          className="
    small:px-4
    tablet:block
    laptop:flex
    laptop:justify-evenly
    laptop:items-center
    laptop:min-h-[70vh]
    laptop:flex-row
    desktop:flex
    desktop:flex-row
    desktop:min-h-[100vh]
    desktop:justify-stretch
     snap-start
    "
        >
          <div
            className="
        small:flex
        small:justify-center
        tablet:w-full
        tablet:flex
        tablet:justify-center
        tablet:px-10
        laptop:flex 
        laptop:justify-center 
        laptop:w-3/6
        desktop:w-2/4
        desktop:flex
        desktop:justify-center
        
        "
          >
            <Presentation />
          </div>
          <div
            className="
        small:mt-5
        small:flex
        small:justify-center
        tablet:flex
        tablet:justify-center
        tablet:w-full
        tablet:px-10
        tablet:mt-10
        md:flex
        md:justify-center
        md:mt-10
        laptop:w-1/3
        desktop:w-2/4
        desktop:flex
        desktop:justify-center
        desktop:items-center
        
        
       
        
        "
          >
            <Image
              src="/human.webp"
              alt="logo"
              width={500}
              height={400}
              quality={100}
              className="
            rounded 
            small:w-60
            laptop:w-96
            "
            />
          </div>
        </section>

        <div
          className="
          text-center 
          flex 
          justify-center
          text-5xl
          tablet:mt-10
          small:mt-10
          md:mt-10
          "
        >
          <BsArrowDownShort className="animate-bounce" />
        </div>

        <section
          id="#Habilidades"
          className="
        flex 
        justify-center 
        text-center 
        items-center
        font-semibold
        mt-5
        desktop:min-h-[100vh]
        md:min-h-[60vh]
        md:mt-10
        snap-start
        "
        >
          <Skills />
        </section>

        <section
          id="#Proyectos"
          className="
        flex 
        justify-center 
        items-center
        font-semibold
        mt-2
        desktop:min-h-[100vh]
        md-h-[60vh]
        snap-start
        "
        >
          <Projects />
        </section>

        <section
          id="#Contacto"
          className="
        desktop:min-h-[100vh]
        mt-10
        snap-start
        "
        >
          <Contact />
        </section>

        <section
          className={
            light
              ? " snap-start min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-black text-white tablet:grid tablet:grid-cols-1 small:grid small:grid-cols-1"
              : " snap-start min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-white text-black tablet:grid tablet:grid-cols-1 small:grid small:grid-cols-1"
          }
        >
          <div className="flex justify-center tablet:justify-center tablet:px-3 tablet:mt-4 small:mt-3">
            <Copyright />
          </div>
          <div className="flex justify-center tablet:justify-center tablet:px-3 tablet:mt-4 small:mt-3">
            <PersonalInformation />
          </div>
        </section>
      </div>
    </>
  );
}
