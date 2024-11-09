import SeconderyLayout from "../../Components/Layouts/SeconderyLayout";
import MovieSlider from "../../Components/MovieSlider";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";
import MediaTypeList from "../../Components/MediaTypeList";


const TvShow = () => {
  window.scrollTo(0, 0);
  useEffect(function () {
    pageTitleMaker("FlixGo-Online Movies,TV Show & Cinema");
  }, []);
  return (
    <SeconderyLayout pageTitle="Tv Show">
      <MediaTypeList mediaType = "tv" />
      <MovieSlider
        title="Top Rated"
        apiPath="movie/top_rated"
        customClass="topRatedMoviesStyle"
        perPage={6}
      />
    </SeconderyLayout>
  );
};
export default TvShow;
