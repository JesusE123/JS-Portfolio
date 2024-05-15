"use client";
import ScrollSpy from "react-ui-scrollspy";

//components
import Header from "@/components/Header";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";

import Experience from "@/components/Experience";
import { PersonalInformation } from "@/components/PersonalInformation";
//


import Hero  from "@/components/Hero";
import Section from "@/components/Section";
export default function Home() {
  return (
    <>
      <Header />
    
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Section id="sobreMi">
         <Hero />
        </Section>

        <Section id="habilidades">
          <Skills />
        </Section>

        <Section id="experiencia">
          <Experience />
        </Section>

        <Section id="proyectos">
          <Projects />
        </Section>

        <Section id="contacto">
          <Contact />
        </Section>
      </ScrollSpy>
      <div className="flex flex-col items-start snap-start min-h-[30vh] sm:grid grid-cols-2 grid-rows-1  gap-x-8 sm:items-center bg-black text-white">
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
