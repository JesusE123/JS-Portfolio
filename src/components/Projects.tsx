import React, { forwardRef } from "react";
import Section from "./Section";
import { Cards } from "./Cards";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  return (
    <>
      <ScrollReveal>
        <Section id="proyectos">
          <div className="flex justify-center items-center h-full flex-col">
          <h2 className="text-4xl py-3 text-center font-bold">
              PROYECTOS 🛫 
            </h2>
            <Cards />
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
};

export default Projects;
