import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

interface cardProps {
  name?: string;
  path: string;
  description?: string;
  image?: any;
  tecnologies: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const CardContainer: React.FC<cardProps> = ({
  name,
  path,
  image,
  description,
  tecnologies,
}) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-2">
      <div className="flex justify-around py-5 lg:justify-between">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-full">
            <Image
              src={`/${image}`}
              loading="lazy"
              alt="Product image"
              width={200}
              height={200}
            />
          </div>
          <div className="">
            <span className="mb-1 inline-block text-lg font-bold transition duration-100 lg:text-xl max-w-xs">
              {name}
            </span>

            <p className="w-[344px]">{description}</p>
            <Link href={path} target="_blank" className="mt-2 text-[#88ffcc] hover:underline transition">Ver proyecto</Link>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 gap-4 lg:gap-4 md:gap-4">
            {tecnologies?.map((element, index) => (
              <li
                className="w-10 h-10 flex justify-center items-center rounded-full p-1"
                key={index}
              >
                {element.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
