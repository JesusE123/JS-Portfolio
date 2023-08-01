"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ScrollSpy from "react-ui-scrollspy";

import Image from "next/image";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
const Skills = dynamic(() => import("../components/Skills"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));
import Copyright from "../components/Copyright";
import { PersonalInformation } from "../components/PersonalInformation";
import Container from "@/components/Container";
import { useTheme } from "next-themes";

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
      <Header />
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Container id="sobreMi">
          <Presentation />

          <div className="flex items-center justify-center w-[40%]">
            <Image
              src="/human.webp"
              alt="logo"
              width={500}
              height={400}
              quality={100}
            />
          </div>
        </Container>

        <Container id="habilidades">
          <Skills />
        </Container>

        <Container id="proyectos">
          <Projects />
        </Container>

        <Container id="contacto">
          <Contact />
        </Container>
      </ScrollSpy>

      <div
        className={
          light
            ? "  snap-start min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-black text-white tablet:grid tablet:grid-cols-1 small:grid small:grid-cols-1"
            : " snap-start min-h-[30vh] grid grid-cols-2 grid-rows-1  gap-x-8 items-center bg-white text-black tablet:grid tablet:grid-cols-1 small:grid small:grid-cols-1"
        }
      >
        <div className="flex justify-center tablet:justify-center tablet:px-3 tablet:mt-4 small:mt-3">
          <Copyright />
        </div>
        <div className="flex justify-center tablet:justify-center tablet:px-3 tablet:mt-4 small:mt-3">
          <PersonalInformation />
        </div>
      </div>
    </>
  );
}
