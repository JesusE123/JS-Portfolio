import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialContact from "./SocialContact";
import DowloadCv from "./DowloadCv";
import { TypeAnimationC } from "./TypeAnimation";

function Hero() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }} className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7 w-96">
        <div className="justify-center text-4xl flex lg:text-7xl lg:flex-col md:flex sm:text-5xl">
          <h1 className="text-[#88ffcc]">JESÚS</h1>
          <h3 className=" ml-2 md:m-0 sm:ml-2">SANCHEZ</h3>
        </div>
        <div className="flex justify-center lg:justify-start">
          <span className="text-center lg:text-left text-xl md:text-2xl sm:text-xl sm:text-center md:text-left pb-4">
            <TypeAnimationC />
          </span>
        </div>
        <p className="text-center lg:text-start max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl">
          Soy un desarrollador apasionado por la tecnologia, por la innovacion y
          por todo lo que nos tiene el futuro en el mundo IT. Soy una persona
          disciplinada apta para cualquier desafio, siempre dispuesto a ayudar y
          aprender de los mas experimentados en este camino de aprendizaje y
          crecimiento.
        </p>
        <div className="flex space-x-6 items-center justify-center lg:justify-start lg:items-center">
          <SocialContact />
          <DowloadCv />
        </div>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 border-4 border-[#88ffcc] rounded-full border-dotted  p-2"></div>
          <Image
            src="/man.png"
            alt="human"
            width={550}
            height={400}
            quality={100}
            className="rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
