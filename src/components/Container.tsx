import React, { CSSProperties } from "react";

interface ContainerProps {
  children?: React.ReactNode;
  id: string;
}

const Container = ({ children, id }: ContainerProps) => {
  return (
    <div
      id={id}
      className="h-[100vh] flex xl:justify-center items-center lg:w-full lg:justify-evenly md:w-full md:justify-evenly"
    >
      {children}
    </div>
  );
};

export default Container;
