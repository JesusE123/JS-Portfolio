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
    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
      <div className="py-5 sm:py-8">
        <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
          <div className="sm:-my-2.5">
            <Image
              src={`/${image}`}
              loading="lazy"
              alt="Product image"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <span className="mb-1 inline-block text-lg font-bold transition duration-100 lg:text-xl max-w-xs">
                {name}
              </span>

              <p className="max-w-sm">{description}</p>
            </div>

            <Link href={path} target="_blank" className="mt-2 text-[#88ffcc] hover:underline transition">Ver proyecto</Link>
          </div>

          <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16 w-40">
            <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
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
    </div>
  );
};

export default CardContainer;
