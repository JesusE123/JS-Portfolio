import React, { forwardRef } from "react";

import { Cards } from "./Cards";

const Projects = () => {
  return (
    <>
    <div className="flex justify-center items-center h-full flex-col">
      <h1 className="text-3xl py-3 text-center">PROYECTOS</h1>
      <Cards />
    </div>
    </>
  );
};

export default Projects;
