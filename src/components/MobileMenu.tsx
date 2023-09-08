import React from "react";
import MenuItem from "./MenuItem";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  const handleDownload = () => {
    window.open("/JesusCV.pdf", "_blank");
  };

  return (
    <div className="h-[250px] fixed right-3 ">
      <div
        className="
      h-0
      flex
      flex-col
      space-y-3
      mt-8
      "
      >
        <MenuItem label="Sobre mi" href="/#sobreMi" />
        <MenuItem label="Habilidades" href="/#habilidades" />
        <MenuItem label="Proyectos" href="/#proyectos" />
        <MenuItem label="Contacto" href="/#contacto" />
        <MenuItem label="Descargar CV" Onclick={handleDownload} href="" />
      </div>
    </div>
  );
};

export default MobileMenu;
