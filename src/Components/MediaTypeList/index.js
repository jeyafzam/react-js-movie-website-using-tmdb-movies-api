import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import FilterItem from "../FilterItem";
import GenreConverter from "../GenreConverter";
import axios from "axios";
import { Pagination } from "antd";
import "./style.css";

const MediaTypeList = ({ mediaType  }) => { 
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [filters, setFilters] = useState({
    genre: "0",
    quality: "0",
    rating: "0",
    sort: "0",
  });

  const fetchMovies = useCallback(() => {
    const genre = filters.genre !== "0" ? `&with_genres=${filters.genre}` : "";
    const rating =
      filters.rating !== "0"
        ? `&vote_average.gte=${
            filters.rating === "1" ? 3 : filters.rating === "2" ? 5 : 7
          }`
        : "";
    const sort =
      filters.sort !== "0"
        ? `&sort_by=${
            filters.sort === "1" ? "release_date.desc" : "release_date.asc"
          }`
        : "";

    axios
      .get(
        `https://api.themoviedb.org/3/discover/${mediaType}?api_key=87421548218df4335721713b417d5a2b&page=${page}${genre}${rating}${sort}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setTotalResults(response.data.total_results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page, filters, mediaType]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);

  const handleFilterApply = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const displayedItems = Math.min(page * 20, totalResults);

  return (
    <Fragment>
      <FilterItem onApply={handleFilterApply} />
      <div className="movie_tv_catalog_section">
        <div className="container">
          <div className="row Movie_tv_item">
            {movies.map((item) => (
              <div className="col-" key={item.id}>
                <div className="Movie_tv_item_content width flex-col">
                  <Link
                    className="movie_tv_cover relative ov width row justify-center align-center"
                    to={`/${mediaType}/${item.id}`} 
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                      alt={item.name || item.title}
                      className="width"
                    />
                    <span className="item_play absolute justify-center align-center flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                      </svg>
                    </span>
                  </Link>

                  <div className="movie_tv_title_ganer_rate relative flex-col flex justify-start align-start width">
                    <h3 className="movie_tv_title width ov">
                      <Link to={`/${mediaType}/${item.id}`}>{item.name || item.title}</Link>
                    </h3>
                    <span className="row movie_tv_ganer justify-start align-start">
                      <GenreConverter genreIds={item.genre_ids} type={mediaType} />
                    </span>
                    <span className="movie_tv_rate relative row justify-start align-center">
                      {item.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12">
            <div className="pagination_container row width space-between align-center">
              <span className="section_paginator_pages ">
                Showing {displayedItems} of {totalResults}
              </span>
              <Pagination
                className="pagination_item"
                current={page}
                total={totalPages * 10}
                pageSize={20}
                showSizeChanger={false}
                onChange={handlePageChange}
                style={{ textAlign: "right" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MediaTypeList;
