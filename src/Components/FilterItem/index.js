import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const FilterItem = ({ onApply }) => {
  const [filters, setFilters] = useState({
    genre: "0",
    quality: "0",
    rating: "0",
    sort: "0",
  });
  const [activeDropdown, setActiveDropdown] = useState(null); // Store the active dropdown
  const genreRef = useRef();
  const qualityRef = useRef();
  const ratingRef = useRef();
  const sortRef = useRef();

  const handleApply = () => {
    onApply(filters);
  };

  const dropdownOptions = {
    genres: [
      { value: "0", label: "All genres" },
      { value: "28", label: "Action/Adventure" },
      { value: "10751", label: "Animals" },
      { value: "16", label: "Animation" },
      { value: "10402", label: "Biography" },
      { value: "35", label: "Comedy" },
      { value: "10764", label: "Cooking" },
      { value: "18", label: "Drama" },
      { value: "14", label: "Fantasy" },
      { value: "36", label: "History" },
      { value: "10749", label: "Romance" },
      { value: "878", label: "Science Fiction" },
      { value: "37", label: "Western" },
    ],
    qualities: [
      { value: "0", label: "Any quality" },
      { value: "1", label: "HD 1080" },
      { value: "2", label: "HD 720" },
      { value: "3", label: "DVD" },
    ],
    ratings: [
      { value: "0", label: "Any rating" },
      { value: "1", label: "from 3.0" },
      { value: "2", label: "from 5.0" },
      { value: "3", label: "from 7.0" },
    ],
    sorts: [
      { value: "0", label: "Relevance" },
      { value: "1", label: "Newest" },
      { value: "2", label: "Oldest" },
    ],
  };

  const handleClickOutside = (event) => {
    if (
      !genreRef.current.contains(event.target) &&
      !qualityRef.current.contains(event.target) &&
      !ratingRef.current.contains(event.target) &&
      !sortRef.current.contains(event.target)
    ) {
      setActiveDropdown(null); // Close the dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (type) => {
    setActiveDropdown((prev) => (prev === type ? null : type)); // Toggle only if it's not already open
  };

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setActiveDropdown(null); // Close the dropdown after selection
  };

  const renderDropdown = (type, options, label) => (
    <div
      ref={
        type === "genre"
          ? genreRef
          : type === "quality"
          ? qualityRef
          : type === "rating"
          ? ratingRef
          : sortRef
      }
      className="custom-dropdown"
      onClick={() => handleDropdownToggle(type)}
    >
      <div className="ss-values align-center row">
        <div className="ss-single">
          {options.find((item) => item.value === filters[type])?.label || label}
        </div>
        <svg
          className="dropdown_icon"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
        </svg>
        {activeDropdown === type && (
          <div className="dropdown-menu">
            {type === "genre" ? (
              <div className="genre-dropdown">
                {options.map((item) => (
                  <div
                    key={item.value}
                    onClick={() => handleFilterChange(type, item.value)}
                    className="dropdown-item"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            ) : (
              options.map((item) => (
                <div
                  key={item.value}
                  onClick={() => handleFilterChange(type, item.value)}
                  className="dropdown-item"
                >
                  {item.label}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="filter  relative width">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter_content flex space-between align-center width">
              <button className="filter_menu cp row justify-start align-center" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
                </svg>
                Filter
              </button>
              <div className="filter_items justify-start align-center row">
                {renderDropdown("genre", dropdownOptions.genres, "All genres")}
                {renderDropdown(
                  "quality",
                  dropdownOptions.qualities,
                  "Any quality"
                )}
                {renderDropdown(
                  "rating",
                  dropdownOptions.ratings,
                  "Any rating"
                )}
                {renderDropdown("sort", dropdownOptions.sorts, "Relevance")}
              </div>
              <button
                className="apply_button button cp filter_btn row align-center justify-center relative"
                onClick={handleApply}
              >
              <span className=" relative">  Apply</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
