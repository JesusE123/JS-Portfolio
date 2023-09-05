import Link from "next/link";

interface MenuItemProps {
  label?: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
    <div
      className="
    flex
    flex-col
    hover:opacity-50
    transition
    cursor-pointer
    
    "
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default MenuItem;
