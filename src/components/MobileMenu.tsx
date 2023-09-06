import React from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const router = useRouter();
  if (!visible) {
    return null;
  }

  const handleDownload = () => {
    router.push("/CVJS.pdf");
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
        <MenuItem label="Descargar CV" href="/JesusCV.pdf" />
      </div>
    </div>
  );
};

export default MobileMenu;
