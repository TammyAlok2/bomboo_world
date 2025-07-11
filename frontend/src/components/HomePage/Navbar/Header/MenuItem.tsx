// components/Header/MenuItem.tsx
import Link from "next/link";

interface MenuItemProps {
    menuItem: {
      id: number;
      title: string;
      path?: string; // Optional
    };
  }

const MenuItem:React.FC<MenuItemProps> = ({ menuItem }) => {
  return (
    <li className="menu-item">
      {menuItem.path ? (
        <Link href={menuItem.path} className="menu-link">
          {menuItem.title}
        </Link>
      ) : (
        <p className="submenu-toggle">{menuItem.title}</p>
      )}
    </li>
  );
};

export default MenuItem;