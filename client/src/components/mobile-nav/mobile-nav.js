import React, { useState } from "react";
import "./mobile-nav.css";
import { IoIosArrowDown } from "react-icons/io";

const MobileNav = () => {
  const [showSubMenu, setShowSubMenu] = useState("");
  const arr = [
    { id: 1, name: "product", subMenu: [{ id: 3, name: "design" }] },
    { id: 2, name: "About", subMenu: [{ name: "design" }] },
    {
      id: 3,
      name: "About",
      subMenu: [
        { name: "design" },
        { name: "craft" },
        { name: "support" },
        { name: "service" },
      ],
    },
  ];
  return (
    <div className="mobile-nav">
      <ul className="main-menu">
        {arr.map((menu) => (
          <div>
            <li
              className="main-menu-item"
              onClick={() => {
                setShowSubMenu(menu.id);
                console.log(menu.id);
              }}
            >
            <span>{menu.name}</span> <IoIosArrowDown/>
            </li>
            {showSubMenu === menu.id && (
              <ul className="submenu">
                {menu.subMenu.map((submenu) => (
                  <li className="submenu-item">{submenu.name}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default MobileNav;
