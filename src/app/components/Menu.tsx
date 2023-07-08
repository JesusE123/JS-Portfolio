import React, { useState, useEffect } from "react";
import Link from "next/link";

const Menu = ({ handleClick }) => {
  const menu = [
    { id: 1, title: "Sobre mi" },
    { id: 2, title: "Habilidades" },
    { id: 3, title: "Proyectos" },
    { id: 4, title: "Contacto" },
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
        {menu.map((element, index) => (
          <li
            className="hover:bg-slate-500 cursor-pointer rounded px-2 py-1"
            key={index}
          >
            <Link href="#" onClick={() => handleClick(element.title)}>
              {element.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
