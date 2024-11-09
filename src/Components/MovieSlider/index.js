import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "./style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GenreConverter from "../GenreConverter";
import TokenAndBaseUrl from "../../Helpers/tokenAndBaseUrl";

const MovieSlider = ({ title, apiPath, customClass, perPage  }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const promises = [];
    for (let page = 1; page <= 3; page++) {
      promises.push(TokenAndBaseUrl.get(`${apiPath}?language=en-US&page=${page}`)); 
    }
    Promise.all(promises)
      .then((responses) => {
        const allMovies = responses.flatMap(response => response.data.results);
        setMovies(allMovies);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiPath]);  

  const renderMovie = () => {
    return movies.map((movie , index) => {
      const { id, title, poster_path, genre_ids, vote_average } = movie;
      return (
        <SplideSlide key={`${index}`}>
          <div className="movie_item flex flex-col align-start justify-start">
            <Link to={`/movie/${id}`} className="movie_cover flex relative ov">
              <img
                className="full-width"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              <span className="item_play absolute flex justify-center align-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                </svg>
              </span>
            </Link>

            <div className="movie_content flex flex-col align-start justify-start relative">
              <h3 className="movie_title ov">
                <Link className="link">{title}</Link>
              </h3>
              <span className="item_category flex align-start justify-start row">
                <Link className="relative">
                  <GenreConverter genreIds={genre_ids} />
                </Link>
              </span>
              <span className="item_rate relative flex justify-start align-center">{vote_average.toFixed(1)}</span>
            </div>
          </div>
        </SplideSlide>
      );
    });
  };

  return (
    <section className={`movie_slider_section relative block ov ${customClass}`}>
      <div className="container relative">
        <div className="movie_slider">
          <div className="col-12">
            <h1 className="slider_title">
              {title}
            </h1>
          </div>
          {loading ? (
            <p className="loading great-vibes-regular">Loading...</p>
          ) : (
            <div className="col-12 slider">
              {movies.length === 0 ? (
                <p className="loading great-vibes-regular">No movies available.</p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    perPage: perPage,
                    autoplay: true,
                    interval: 1000,
                    gap: "1.5rem",
                    perMove: 1,
                    pagination: true,
                    breakpoints: {
                      1200: { perPage: 4 },
                      1000: { perPage: 3 },
                      770: { perPage: 2 },
                    },
                  }}
                >
                  {renderMovie()}
                </Splide>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieSlider;
