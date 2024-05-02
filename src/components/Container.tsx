import React from "react";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface ContainerProps {
  children?: React.ReactNode;
  id: string;
}

const Container = ({ children, id }: ContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
    style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }}
      ref={ref}
      id={id}
      className=" justify-center  flex-col h-[100vh] sm:h-[100vh] flex xl:justify-center items-center lg:w-full lg:justify-evenly md:w-full md:justify-evenly sm:justify-center sm:flex-col md:flex-row"
    >
     
        {children}
      
    </div>
  );
};

export default Container;
