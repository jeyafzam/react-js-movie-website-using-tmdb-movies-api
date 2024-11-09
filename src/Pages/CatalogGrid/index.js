import SeconderyLayout from "../../Components/Layouts/SeconderyLayout";
import MovieSlider from "../../Components/MovieSlider";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";
import MediaTypeList from "../../Components/MediaTypeList";

const CatalogGrid = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    pageTitleMaker("FlixGo-Online movie");
  }, []);

  return (
    <SeconderyLayout pageTitle="CatalogGrid">
      <MediaTypeList mediaType="movie" />
      <MovieSlider
        title="Top Rated"
        apiPath="movie/top_rated"
        customClass="topRatedMoviesStyle"
        perPage={6}
      />
    </SeconderyLayout>
  );
};

export default CatalogGrid;
