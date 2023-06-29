"use client";

import React, { useState, useEffect } from "react";

import Menu from "./Menu";
import DowloadCv from "./DowloadCv";
import ThemeSwitcher from "./ThemeSwitcher";
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import useHeader from "@/hooks/useHeader";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { theme } = useTheme();
  const { background, showMobileMenu, toggleMobileMenu } = useHeader();
  const light = theme === "light";

  return (
    <div
      className={
        background
          ? "fixed inset-x-0 mx-auto flex justify-between shadow-xl shadow-transparent"
          : "fixed inset-x-0 mx-auto flex justify-between"
      }
    >
      <div className="flex items-center">
        <h1 className="text-bold text-5xl ml-10">JS</h1>
      </div>
      <div className="max-sm:hidden">
        <Menu />
      </div>

      <div
        className="
        lg:hidden 
        sm:hidden 
        flex 
        flex-row
         items-center 
         justify-end 
         w-full
       
      "
      >
        <div
          className=" 
    hover:opacity-40
    cursor-pointer
    transition"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu
            size={30}
            className={light ? "text-blue-950" : "text-[#88ffcc]"}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
      <div
        className="
        mr-10 
        flex
        flex-row
        items-center
        gap-2
        "
      >
        <div>
          <ThemeSwitcher />
        </div>

        <div className="max-sm:hidden">
          <DowloadCv />
        </div>
      </div>
    </div>
  );
};

export default Header;
