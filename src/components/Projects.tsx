import React, { forwardRef } from "react";

import { Cards } from "./Cards";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center py-4">Proyectos</h1>

      <Cards />
    </div>
  );
};

export default Projects;
