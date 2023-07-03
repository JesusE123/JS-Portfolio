"use client";

import React from "react";

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
      <div className="tablet:hidden md:hidden laptop:hidden">
        <Menu />
      </div>

      <div
        className="
        tablet:w-full
        md:w-full
        laptop:w-full
        flex 
        flex-row
         items-center 
         justify-end 
       
      "
      >
        <div
          className=" 
    cursor-pointer
    transition
    absolute
    desktop:hidden
    "
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu
            size={30}
            className={
              light
                ? "text-blue-950 hover:opacity-40 transition"
                : "text-[#88ffcc] hover:opacity-40 transition"
            }
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

        <div className="tablet:hidden md:hidden laptop:hidden">
          <DowloadCv />
        </div>
      </div>
    </div>
  );
};

export default Header;
