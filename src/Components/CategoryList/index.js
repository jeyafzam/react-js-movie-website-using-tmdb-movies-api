import React, { useEffect, useState } from "react";
import TokenAndBaseUrl from "../../Helpers/tokenAndBaseUrl";
import GenreConverter from "../../Components/GenreConverter";
import { Link } from "react-router-dom";
import "./style.css";

const CategoryList = ({ category, type = "type", limit }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let allMovies = [];
    setLoading(true);

    const loadMovies = () => {
      let page = 13;
      let moreData = true;

      const fetchNextPage = () => {
        if (!moreData || (limit && allMovies.length >= limit)) {
          setMovies(allMovies.slice(0, limit || allMovies.length));
          setLoading(false);
          return;
        }

        TokenAndBaseUrl.get(`/${category}?page=${page}`)
          .then((response) => {
            const newMovies = response.data.results;
            if (newMovies.length === 0) {
              moreData = false;
            } else {
              allMovies = [...allMovies, ...newMovies];
            }
            page += 1;
            fetchNextPage();
          })
          .catch((error) => {
            console.error("Error fetching movies:", error);
            moreData = false;
            setLoading(false);
          });
      };

      fetchNextPage();
    };

    loadMovies();
  }, [category, limit]);

  const catalogLink = category === "movie/popular" ? "/cataloggrid" : "/Tvshow";

  return (
    <div>
      {loading ? (
        <p className="great-vibes-regular categorylist_p">Loading...</p>
      ) : (
        <div>
          <div className="content_body row">
            {movies.map((movie) => (
              <div className="col-2" key={movie.id}>
                <div className="content_item flex flex-col align-start justify-start">
                  <Link
                    className="content_item_one row relative align-center justify-center ov width"
                    to={`/movie/${movie.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      className="full-width item_img"
                    />
                    <span className="item_play absolute flex align-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                      </svg>
                    </span>
                  </Link>
                  <div className="content_item_tow row relative flex-col align-start justify-start width">
                    <h3 className="content_item_tow_title width ov">
                      <Link className="link" to={`/movie/${movie.id}`}>
                        {movie.title || movie.name}
                      </Link>
                    </h3>
                    <span className="content_item_tow_ganre row align-start justify-start">
                      <Link className="ov">
                        <GenreConverter genreIds={movie.genre_ids} />
                      </Link>
                    </span>
                    <span className="content_item_tow_rate row justify-start align-center relative">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-center">
            <div className="col-12">
              <Link
                to={catalogLink}
                className="herosection_btn row align-center justify-center relative"
              >
                <span className="relative">to catalog</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
