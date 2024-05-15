"use client";

import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import DowloadCv from "./DowloadCv";
import MobileMenu from "./MobileMenu";

import { AiOutlineMenu } from "react-icons/ai";

import useHeader from "@/hooks/useHeader";

const Header = () => {
  const { background, showMobileMenu, toggleMobileMenu } = useHeader();

  return (
    <motion.nav
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={
        background
          ? "bg-gray-400/50 fixed w-full md:bg-gray-400/50"
          : "fixed w-full"
      }
    >
      <div className="flex items-center sm:items-center justify-around h-20">

        <div className="ms-8">
        <span className="text-4xl">JS</span>
        <span className="text-2xl text-[#88ffcc]">.dev</span>
        </div>
        <Menu />
       
        <div className="flex justify-end xl:hidden items-center">
          <div className="cursor-pointer transition absolute right-14">
            <AiOutlineMenu
              size={30}
              onClick={toggleMobileMenu}
              className="hover:opacity-30 transition-opacity"
            />
            <MobileMenu visible={showMobileMenu} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
