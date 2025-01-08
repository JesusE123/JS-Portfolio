import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

import { MobileMenu } from "./MobileMenu";

const Header = () => {
  return (
    <nav className="w-full">
      <div className="flex items-center sm:items-center justify-around h-20">
        <div className="ms-8">
          <span className="text-4xl">JS</span>
          <span className="text-2xl text-[#88ffcc]">.dev</span>
        </div>
        <Menu />
        
          <MobileMenu />
        
      </div>
    </nav>
  );
};

export default Header;
