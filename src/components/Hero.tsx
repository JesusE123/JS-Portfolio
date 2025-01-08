import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import SocialContact from "./SocialContact";
import DowloadCv from "./DowloadCv";
import { TypeAnimationC } from "./TypeAnimation";
import ScrollReveal from "./ScrollReveal";
import Section from "./Section";

function Hero() {
  return (
    <ScrollReveal>
      <Section id="sobreMi">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col w-full max-w-lg space-y-4">
            <h1 className="text-5xl font-bold">Hola, soy Jesús 🖐</h1>
            <span className="text-xl">
              <TypeAnimationC />
            </span>
            <p className="text-xl">
              Soy un desarrollador apasionado por la tecnología, por la
              innovación y por todo lo que nos tiene el futuro en el mundo IT.
              Soy una persona disciplinada apta para cualquier desafío, siempre
              dispuesto a ayudar y aprender de los más experimentados en este
              camino de aprendizaje y crecimiento.
            </p>
            <div className="flex space-x-4">
              <SocialContact />
              <DowloadCv />
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src="/man.png"
              alt="human"
              width={400}
              height={400}
              quality={100}
              style={{
                marginBottom: 30,
              }}
            />
          </div>
        </div>
      </Section>
    </ScrollReveal>
  );
}

export default Hero;
