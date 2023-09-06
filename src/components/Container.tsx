import React, { CSSProperties } from "react";

interface ContainerProps {
  children?: React.ReactNode;
  id: string;
}

const Container = ({ children, id }: ContainerProps) => {
  return (
    <div
      id={id}
      className=" justify-center  flex-col h-[100vh] sm:h-[100vh] flex xl:justify-center items-center lg:w-full lg:justify-evenly md:w-full md:justify-evenly sm:justify-center sm:flex-col md:flex-row"
    >
      {children}
    </div>
  );
};

export default Container;
