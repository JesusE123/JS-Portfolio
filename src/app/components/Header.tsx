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
          ? "desktop:fixed desktop:inset-x-0 desktop:flex desktop:justify-between"
          : "desktop:fixed desktop:inset-x-0 desktop:flex desktop:justify-between"
      }
    >
      <div className="">
        <h1 className="text-bold text-5xl">JS</h1>
      </div>
      <div className="tablet:hidden md:hidden laptop:hidden">
        <Menu />
      </div>

      <div
        className="
        tablet:w-full
        md:w-full
        laptop:w-full
        desktop:hidden
       
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
        desktop:w-auto
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
