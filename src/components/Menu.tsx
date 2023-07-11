import React from "react";
import Link from "next/link";

const Menu = () => {
  const menuItem = [
    { id: 1, title: "Sobre mi", ref: "#SobreMi" },
    { id: 2, title: "Habilidades", ref: "#Habilidades" },
    { id: 3, title: "Proyectos", ref: "#Proyectos" },
    { id: 4, title: "Contacto", ref: "#Contacto" },
  ];

  return (
    <div
      className="
    desktop:h-16
    desktop:flex
    desktop:items-center

    "
    >
      <ul className="flex flex-row space-x-8 items-center text-xl">
        {menuItem.map((element, index) => (
          <li
            className="hover:bg-slate-500 cursor-pointer rounded px-2 py-1"
            key={index}
          >
            <a href={element.ref}>{element.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
