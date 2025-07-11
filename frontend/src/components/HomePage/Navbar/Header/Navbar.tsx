'use client';

import { useState } from "react";
import menuData from "../../../../data/NavMenuData";
import MenuItem from "./MenuItem";

// Define a type for menu items if not already defined in MenuData
export interface MenuItemType {
  id: number;
  title: string;
  link?: string;
}

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div>
      <button
        onClick={navbarToggleHandler}
        id="navbarToggler"
        aria-label="Mobile Menu"
        className="navbar-toggler"
      >
        {/* Hamburger Icon */}
      </button>
      <nav
        id="navbarCollapse"
        className={`navbar-collapse ${navbarOpen ? "open" : ""}`}
      >
        <ul className="navbar-list">
          {menuData.map((menuItem: MenuItemType, index: number) => (
            <MenuItem key={index} menuItem={menuItem} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
