import React from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface ContainerProps {
  children?: React.ReactNode;
  id: string;
}

const Section = ({ children, id }: ContainerProps) => {
  

  return (
    <div
    
      id={id}
      className=" justify-center flex-col h-[100vh] sm:h-[100vh] flex xl:justify-center items-center lg:w-full lg:justify-evenly md:w-full sm:justify-center sm:flex-col"
    >
     
        {children}
      
    </div>
  );
};

export default Section;