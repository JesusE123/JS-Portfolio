import React from "react";
import SocialContact from "./SocialContact";

const Copyright = () => {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-5xl">JS </p>
      <p className="font-semibold">@ 2023 Todos los derechos reservados</p>
      <SocialContact />
    </div>
  );
};

export default Copyright;
