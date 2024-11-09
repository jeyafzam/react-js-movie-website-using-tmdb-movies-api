import PrimaryLayout from "../Layouts/PrimaryLayout";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import TokenAndBaseUrl from "../../Helpers/tokenAndBaseUrl";
import GenreConverter from "../GenreConverter";
import "./style.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/style.css";

const SingleMovie = () => {
  const { MovieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Fetch movie details
    TokenAndBaseUrl.get(`/movie/${MovieId}`)
      .then((response) => {
        if (isMounted) setMovieData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // Fetch movie trailers
    TokenAndBaseUrl.get(`/movie/${MovieId}/videos`)
      .then((response) => {
        const trailer = response.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (isMounted) {
          setTrailerUrl(
            trailer ? `https://www.youtube.com/embed/${trailer.key}` : null
          );
        }
      })
      .catch(() => {
        console.log("Error fetching trailer");
      });

    // Fetch movie credits for director and actors
    TokenAndBaseUrl.get(`/movie/${MovieId}/credits`)
      .then((response) => {
        const crew = response.data.crew;
        const cast = response.data.cast;
        const directorData = crew.find((member) => member.job === "Director");
        if (isMounted) {
          setDirector(directorData ? directorData.name : "Not available");
          setActors(cast.slice(0, 6).map((actor) => actor.name));
        }
      })
      .catch(() => {
        console.log("Error fetching credits");
      });

    // Fetch similar movies
    TokenAndBaseUrl.get(`/movie/${MovieId}/similar`)
      .then((response) => {
        if (isMounted) setSimilarMovies(response.data.results);
      })
      .catch(() => {
        console.log("Error fetching similar movies");
      });

    // Fetch reviews
    TokenAndBaseUrl.get(`/movie/${MovieId}/reviews`)
      .then((response) => {
        if (isMounted) setReviews(response.data.results);
      })
      .catch(() => {
        console.log("Error fetching reviews");
      });

    // Fetch photos
    TokenAndBaseUrl.get(`/movie/${MovieId}/images`)
      .then((response) => {
        if (isMounted) setPhotos(response.data.backdrops);
      })
      .catch(() => {
        console.log("Error fetching photos");
      });

    return () => {
      isMounted = false;
    };
  }, [MovieId]);

  // Define background style using movie poster
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieData.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <PrimaryLayout>
      {loading ? (
        <div className="container">
          <p className="loading great-vibes-regular">Loading...</p>
        </div>
      ) : (
        <Fragment>
          <section className="singleMovieSection  relative">
            <div
              className="singleMovieSection_bg absolute block"
              style={backgroundStyle}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-12 singleMovieSection_col_12">
                  <h1 className="singleMovieSection_title">
                    {movieData.title}
                  </h1>
                </div>
                <div className="col-6 singleMovieSection_col_6">
                  <div className="left_item row justify-start align-start">
                    <div className="left_item_cover flex  justify-center align-center relative ov">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                        alt={movieData.title}
                        className="relative"
                      />
                    </div>
                    <div className="left_item_content ov relative flex flex-col justify-start align-start">
                      <div className="left_item_wrap flex justify-start align-center">
                        <span className="left_item_rate relative row  justify-start align-center">
                          {movieData.vote_average}
                        </span>
                        <ul className="left_item_list justify-start align-center row">
                          <li className="justify-start align-center row">
                            Full HD
                          </li>
                        </ul>
                      </div>
                      <ul className="left_item_meta block">
                        <li>
                          <span>Genre:</span>
                          <Link to="#">
                            {movieData.genres
                              ?.map((genre) => genre.name)
                              .join(", ")}
                          </Link>
                        </li>
                        <li>
                          <span>Running time:</span> {movieData.runtime} minutes
                        </li>
                        <li>
                          <span>Country:</span>
                          <Link className="relative" to="#">
                            {movieData.production_countries
                              ?.map((country) => country.name)
                              .join(", ")}
                          </Link>
                        </li>
                        <li>
                          <span>Premiere:</span> {movieData.release_date}
                        </li>
                      </ul>

                      <ul className="left_item_meta left_item_meta_second">
                        <li>
                          <span>Director:</span> <Link to="#">{director}</Link>
                        </li>
                        <li>
                          <span>Actors:</span>
                          <Link to="#">{actors.join(", ")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item_description block">
                    <div className="scroll-content">
                      <p className="block">{movieData.overview}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 iframe-container-col_6">
                  {
                    <div className="plyr">
                      {trailerUrl && (
                        <div className="iframe-container ov">
                          <iframe
                            width="560"
                            height="315"
                            src={trailerUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <button className="play-button flex justify-center align-center absolute"></button>
                        </div>
                      )}
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>

          <section className="singleMovieSection_content">
            <div className="content_head relative ov">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="content_title">Discover</h2>
                    <ul className="nav_tabs row justify-start align-center ov">
                      <li className="nav_item">
                        <button
                          className={`button row  justify-start relative cp align-center ${
                            activeTab === "photos" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("photos")}
                        >
                          Photos
                        </button>
                      </li>
                      <li className="nav_item">
                        <button
                          className={`button  row  justify-start relative cp align-center ${
                            activeTab === "reviews" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("reviews")}
                        >
                          Reviews
                        </button>
                      </li>
                      <li className="nav_item">
                        <button
                          className={`button   row  justify-start relative cp align-center ${
                            activeTab === "Comments" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("Comments")}
                        >
                          Comments
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="container second_container">
              <div className="row ">
                <div className="col-8">
                  <div className="tab_content ">
                    {/* Photos Section */}
                    {activeTab === "photos" && (
                      <Gallery>
                        {photos.length > 0 ? (
                          <div className="photos space-between row">
                            {photos.slice(0, 20).map((photo) => (
                              <Item
                                key={photo.file_path}
                                original={`https://image.tmdb.org/t/p/original${photo.file_path}`}
                                thumbnail={`https://image.tmdb.org/t/p/w500${photo.file_path}`}
                                width="1024"
                                height="768"
                              >
                                {({ ref, open }) => (
                                  <img
                                    ref={ref}
                                    onClick={open}
                                    src={`https://image.tmdb.org/t/p/w500${photo.file_path}`}
                                    alt={movieData.title}
                                    style={{ cursor: "pointer" }}
                                  />
                                )}
                              </Item>
                            ))}
                          </div>
                        ) : (
                          <p className="great-vibes-regular tab_content_p">No photo available</p>
                        )}
                      </Gallery>
                    )}

                    {activeTab === "reviews" &&
                      (reviews.length > 0 ? (
                        <div className="reviews">
                          {reviews.map((review) => (
                            <div key={review.id} className="review">
                              <ul className="review_list">
                                <li className="review_item">
                                  <div className="review_autor flex flex-col justify-center align-start relative">
                                    <img
                                      src={
                                        review.author_details.avatar_path
                                          ? `https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
                                          : "https://flixgo.volkovdesign.com/main/img/user.svg"
                                      }
                                      alt={review.author_details.username}
                                      className="review_avatar absolute"
                                    />

                                    <span className="review_name block">
                                      {review.author_details.username ||
                                        review.author}
                                    </span>
                                    <span className="review_time block">
                                      {new Date(
                                        review.created_at
                                      ).toLocaleDateString()}
                                      , by {review.author_details.username}
                                    </span>
                                    <span className="review_rating absolute row justify-start align-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"></path>
                                      </svg>
                                      {review.author_details.rating}
                                    </span>
                                  </div>
                                  <p className="review_text block">
                                    {review.content}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          ))}
                          <form
                            action="#"
                            className="review_sign_form flex flex-col  justify-start align-start  relative ov"
                          >
                            <div className="row">
                              <div className="col-6">
                                <div className="review_sign_group relative">
                                  <input
                                    type="text"
                                    className="review_sign_input relative"
                                    placeholder="Title"
                                  />
                                </div>
                              </div>

                              <div className="col-6">
                                <div className="review_sign_group relative">
                                  <select
                                    className="review_sign_select relative"
                                    name="rating"
                                    id="rating"
                                  >
                                    <option value="0">Rating</option>
                                    <option value="1">1 star</option>
                                    <option value="2">2 stars</option>
                                    <option value="3">3 stars</option>
                                    <option value="4">4 stars</option>
                                    <option value="5">5 stars</option>
                                    <option value="6">6 stars</option>
                                    <option value="7">7 stars</option>
                                    <option value="8">8 stars</option>
                                    <option value="9">9 stars</option>
                                    <option value="10">10 stars</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="sign_group">
                                  <textarea
                                    className="review_sign_textarea relative"
                                    placeholder="Write a review"
                                  ></textarea>
                                </div>
                              </div>

                              <div className="col-12">
                                <button className="review_sign_btn  button row justify-center align-center  relative cp">
                                  <span>Send</span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : (
                        <p className="great-vibes-regular tab_content_p">
                          No reviews available.
                        </p>
                      ))}
                  </div>
                </div>
                {/* Similar Movies Section */}
                <div className="col-4">
                  <div className="row  width_right">
                    <div className="col-12">
                      <h2 className="similar_movie_title">You may also like</h2>
                    </div>
                    {similarMovies.length > 0 ? (
                      <div className="similar_movie_item row">
                        {similarMovies.slice(0, 15).map(
                          (movie) =>
                            movie.poster_path && (
                              <div key={movie.id} className="col-6">
                                <div className="similar_movie_item flex flex-col justify-start align-start">
                                  <Link
                                    to={`/movie/${movie.id}`}
                                    className="flex relative ov similar_movie_item_cover_link  justify-center align-center"
                                  >
                                    <img
                                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                      alt={movie.title}
                                      className="similar_movie_item_img relative"
                                    />
                                    <span className="similar_movie_item_play absolute flex justify-center align-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"></path>
                                      </svg>
                                    </span>
                                  </Link>
                                  <div className="similar_movie_item_content  relative flex flex-col  justify-start align-start">
                                    <h3 className="similar_movie_item_title">
                                      <Link to="">
                                        <span>{movie.title}</span>
                                      </Link>
                                    </h3>

                                    <Link className="similar_movie_item_genre row justify-start align-start relative">
                                      <GenreConverter
                                        genreIds={movie.genre_ids}
                                      />
                                    </Link>
                                    <span className="similar_movie_item_rate relative flex justify-start align-center">
                                      {movie.vote_average.toFixed(1)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    ) : (
                      <p className="great-vibes-regular sm">
                        No similar movies found.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </PrimaryLayout>
  );
};
export default SingleMovie;
