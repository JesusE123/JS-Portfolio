import react from "react";

interface MenuItemProps {
  label: string;
}

const menuItem: React.FC<MenuItemProps> = ({ label }) => {
  return <div className="">{label}</div>;
};

export default menuItem;
