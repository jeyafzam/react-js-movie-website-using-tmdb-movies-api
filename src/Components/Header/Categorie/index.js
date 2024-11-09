import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Categorie = () => {
  const categoryItems = [
    { label: "Films", path: "/Cataloggrid" },
    { label: "TV Series", path: "/Tvshow" },
    { label: "Anime", path: "/" },
    { label: "Cartoons", path: "/" },
    { label: "Catalog Grid", path: "/Cataloggrid" },
    { label: "Catalog List", path: "/" },
    { label: "Details Film", path: "/" },
    { label: "Details TV Series", path: "/" },
  ];
  const firstPart = categoryItems.slice(0, 4); // First 4 items
  const secondPart = categoryItems.slice(4); // Remaining items

  const [openDropdown, setOpenDropdown] = useState(false); // Manage open state
  const dropdownRef = useRef(null); // Ref for managing outside clicks

  // Toggle dropdown on button click
  const toggleDropdown = () => {
    setOpenDropdown((prevState) => !prevState); // Toggle the dropdown
  };

  // Handle clicks outside the dropdown to close it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(false); // Close dropdown if click is outside
    }
  };

  // Add event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="categories relative" ref={dropdownRef}>
      {/* Categories button */}
      <button
        className="button cp flex bg_color_header categories_btn"
        onClick={toggleDropdown}
      >
        <span className={`absolute ${openDropdown ? "nth-child-one" : ""}`}></span>
        <span className={`absolute ${openDropdown ? "nth-child-two" : ""}`}></span>
      </button>

      {/* Dropdown menu */}
      {openDropdown && (
        <div className="dropdown flex align-start justify-start absolute ov header_dropdown_menu show">
          <ul className="flex flex-col align-start justify-start categories_list">
            {firstPart.map((item, index) => (
              <li className="relative width" key={index}>
                <Link className="link flex align-center" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col align-start justify-start categories_list">
            {secondPart.map((item, index) => (
              <li className="relative width" key={index}>
                <Link className="link flex align-center" to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categorie;