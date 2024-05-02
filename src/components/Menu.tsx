import React from "react";
import Link from "next/link";

const Menu = () => {
  const menuItem = [
    { id: 1, title: "Sobre mi", ref: "sobreMi" },
    { id: 2, title: "Habilidades", ref: "habilidades" },
    { id: 3, title: "Experiencia", ref: "experiencia" },
    { id: 4, title: "Proyectos", ref: "proyectos" },
    { id: 5, title: "Contacto", ref: "contacto" },
  ];

  return (
    <ul className=" hidden xl:flex flex-row space-x-8 items-center text-xl  md:hidden sm:hidden">
      {menuItem.map((element, index) => (
        <li className="cursor-pointer rounded px-2 py-1" key={index}>
          <Link
            className="hover:opacity-25 transition duration-500 py-1"
            href={`#${element.ref}`}
            data-to-scrollspy-id={element.ref}
          >
            {element.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
