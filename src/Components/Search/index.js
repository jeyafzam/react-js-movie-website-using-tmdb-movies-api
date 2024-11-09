import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import TokenAndBaseUrl from "../../Helpers/tokenAndBaseUrl";

const Search = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = () => {
      if (inputValue) {
        TokenAndBaseUrl.get("/search/movie", {
          params: {
            query: inputValue,
          },
        })
          .then((response) => {
            const movies = response.data.results.map((movie) => ({
              value: movie.id,
              label: movie.title,
            }));
            setOptions(movies);
          })
          .catch((error) => {
            console.error("Error fetching movies:", error);
          });
      } else {
        setOptions([]);
      }
    };

    fetchMovies();
  }, [inputValue]);

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      navigate(`/movie/${selectedOption.value}`);
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#28282d",
      borderColor: state.isFocused
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(255, 255, 255, 0.05)",
      boxShadow: state.isFocused
        ? "0 0 0 1px rgba(255, 255, 255, 0.05)"
        : "none",
      "&:hover": {
        borderColor: "rgba(255, 255, 255, 0.05)",
      },
      height: "3.2em",
      borderRadius: "0.5em",
      fontSize: "0.875em",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      width: 0,
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#2b2b31",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "white",
      backgroundColor: state.isSelected ? "#3b3b3f" : "transparent",
      "&:hover": {
        backgroundColor: "#3b3b3f",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
    }),
  };

  return (
    <form className="search flex justify-start align-center relative">
      <Select
        options={options}
        onChange={handleChange}
        onInputChange={(input) => setInputValue(input)}
        isSearchable
        placeholder="Search..."
        isClearable
        className="search_select"
        styles={customStyles}
      />
      <button
        className="search_button absolute button flex justify-center align-center"
        type="button"
      >
        <i className="fa-solid fa-magnifying-glass cp"></i>
      </button>
    </form>
  );
};

export default Search;
