import React from "react";
import SocialContact from "./SocialContact";

const Copyright = () => {
  return (
    <div className="flex flex-col sm:ml-4 md:ml-0">
      <p className="font-bold text-5xl">JS </p>
      <p className="font-semibold">@ 2023 Todos los derechos reservados</p>
      <div className="flex justify-start w-full">
        <SocialContact />
      </div>
    </div>
  );
};

export default Copyright;
