import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io"; // Import the icon
import { DropMenu } from "./NavBarItems";
import "./style.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Handle dropdown toggle
  const handleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index)); // Toggle dropdown
  };

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null); // Close any open dropdown
    }
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul className="navbar justify-start align-center" ref={dropdownRef}>
      {DropMenu.map((menuItem, index) => (
        <li key={index} className="navbar_items flex justify-start align-start  relative">
          <Link
            onClick={() => menuItem.subMenu && handleDropdown(index)} // Toggle the dropdown
            className="item_title flex justify-start align-center "
          >
            {menuItem.title}
            {menuItem.subMenu && <IoIosArrowDown className="dropdown_icon"/>}
            {/* Add icon */}
          </Link>
          {menuItem.subMenu && (
            <ul className={`submenu flex-col justify-start align-start  absolute ${openDropdown === index ? "open" : ""}`}>
              {menuItem.subMenu.map((subItem, subIndex) => (
                <li key={subIndex} className="submenu_item">
                  <Link className="link flex align-center justify-start" to={subItem.path}>{subItem.title}</Link>
                  {/* Use Link component */}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;



