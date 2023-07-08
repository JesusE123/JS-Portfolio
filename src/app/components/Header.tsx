"use client";

import React from "react";

import Menu from "./Menu";
import DowloadCv from "./DowloadCv";
import ThemeSwitcher from "./ThemeSwitcher";
import { AiOutlineMenu } from "react-icons/ai";
import { useTheme } from "next-themes";
import useHeader from "@/hooks/useHeader";
import MobileMenu from "./MobileMenu";

const Header = ({ handleClick }) => {
  const { theme } = useTheme();
  const { background, showMobileMenu, toggleMobileMenu } = useHeader();
  const light = theme === "light";

  return (
    <div
      className={
        background
          ? "small:flex small:justify-between small:fixed small:w-full laptop:flex laptop:justify-between laptop:fixed laptop:w-full desktop:fixed desktop:items-center desktop:inset-x-0 desktop:flex desktop:justify-between  md:flex md:justify-between md:fixed md:w-full tablet:flex tablet:justify-between tablet:w-full tablet:fixed "
          : "small:flex small:justify-between small:fixed small:w-full laptop:flex laptop:justify-between laptop:fixed laptop:w-full desktop:fixed desktop:items-center desktop:inset-x-0 desktop:flex desktop:justify-between  md:flex md:justify-between md:fixed md:w-full tablet:flex tablet:justify-between tablet:w-full tablet:fixed "
      }
    >
      <div className="">
        <h1 className="text-bold text-5xl ml-5">JS</h1>
      </div>
      <div
        className="
      small:hidden 
      tablet:hidden 
      md:hidden 
      laptop:hidden"
      >
        <Menu handleClick={handleClick} />
      </div>

      <div
        className="
        small:w-full
        small:justify-end
        small:items-center
        small:flex
        tablet:w-full
        tablet:justify-end
        tablet:items-center
        tablet:flex
        desktop:hidden
        md:flex
        md:w-full
        md:justify-end
        md:items-center
        laptop:flex
        laptop:w-full
        laptop:justify-end
        laptop:items-center
        
       
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

        <div className="small:hidden tablet:hidden md:hidden laptop:hidden">
          <DowloadCv />
        </div>
      </div>
    </div>
  );
};

export default Header;
