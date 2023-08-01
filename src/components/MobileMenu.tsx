import React from "react";
import MenuItem from "./MenuItem";
import DowloadCv from "./DowloadCv";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="h-full fixed right-2">
      <div
        className="
      h-0
      flex
      flex-col
      space-y-3
      mt-3
      "
      >
        <MenuItem label="Sobre mi" href="/#presentation" />
        <MenuItem label="Habilidades" href="/#skills" />
        <MenuItem label="Proyectos" href="/#Proyectos" />
        <MenuItem label="Contacto" href="/#Contact" />
        <MenuItem label="Descargar CV" href="#" />
      </div>
    </div>
  );
};

export default MobileMenu;
