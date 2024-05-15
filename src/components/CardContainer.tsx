import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

interface cardProps {
  name?: string;
  path?: string;
  image?: any;
  description?: string;
}

const CardContainer: React.FC<cardProps> = ({
  name,
  path,
  image,
  description
}) => {
  const { theme } = useTheme();
  const light = theme === "light";
  return (
    <>
     

<div className="w-96 h-[380px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-2 py-1">
  <div>
    <img src={image} alt="title logo" className="rounded-lg object-cover w-full h-44 hover:scale-125 transition inline-flex" />
  </div>

  <div className="font-semibold text-2xl text-white mt-3">
    <h5 >{name}</h5>
  </div>

  <div className= "text-sm text-gray-300 h-28">
    <p>{description}</p>
  </div>

  <Link target="_blank" href={`${path}`} className="text-white font-bold hover:scale-90 inline-flex transition border border-[#88ffcc] px-2 py-1 rounded">
  Ver proyecto
  </Link>
       
</div>

    </>
  );
};

export default CardContainer;
