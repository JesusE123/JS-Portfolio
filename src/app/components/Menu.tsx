import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div
      className="
    desktop:h-16
    desktop:flex
    desktop:items-center
    "
    >
      <ul className="flex flex-row space-x-8 items-center text-xl">
        <li className="hover:bg-slate-500 rounded px-1 transition">
          <Link href="/#presentation">Sobre mi</Link>
        </li>
        <li className="hover:bg-slate-500 rounded px-1 transition">
          <Link href="/#skills">Habilidades</Link>
        </li>
        <li className="hover:bg-slate-500 rounded px-1 transition">
          <Link href="/#Proyectos">Proyectos</Link>
        </li>
        <li className="hover:bg-slate-500 rounded px-1 transition">
          <Link href="/#contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
