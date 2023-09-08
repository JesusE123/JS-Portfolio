import Link from "next/link";

interface MenuItemProps {
  label?: string;
  href: string;
  Onclick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, Onclick }) => {
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
      <Link href={href} onClick={Onclick}>
        {label}
      </Link>
    </div>
  );
};

export default MenuItem;
