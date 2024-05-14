"use client";
import ScrollSpy from "react-ui-scrollspy";
import Image from "next/image";

//components
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";
import Container from "@/components/Container";
import Experience from "@/components/Experience";
import { PersonalInformation } from "@/components/PersonalInformation";
//


import Hero  from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Header />

      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Container id="sobreMi">
         <Hero />
        </Container>

        <Container id="habilidades">
          <Skills />
        </Container>

        <Container id="experiencia">
          <Experience />
        </Container>

        <Container id="proyectos">
          <Projects />
        </Container>

        <Container id="contacto">
          <Contact />
        </Container>
      </ScrollSpy>
      <div className="flex flex-col items-start snap-start min-h-[30vh] sm:grid grid-cols-2 grid-rows-1  gap-x-8 sm:items-center bg-white text-black">
        <div className="flex justify-center">
          <Copyright />
        </div>
        <div className="flex justify-center ">
          <PersonalInformation />
        </div>
      </div>
    </>
  );
}
