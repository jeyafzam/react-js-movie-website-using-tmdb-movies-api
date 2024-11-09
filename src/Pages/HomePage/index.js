import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieSlider from "../../Components/MovieSlider";
import OurPartners from "../../Components/OurPartners";
import PricingList from "../../Components/pricingList";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";
import "./syle.css";
import HeroSection from "../../Components/HeroSection"



const HomePage = () => {
  useEffect(function(){
    pageTitleMaker("FlixGo-Online Movies,TV Show & Cinema")
 },[])
  return (
    <PrimaryLayout>
      <MovieSlider title="NEW ITEMS OF THIS SEASON" apiPath="movie/now_playing" customClass="newItemMoviesStyle" perPage={5}/>
      <HeroSection/>
      <MovieSlider title="Top Rated" apiPath="movie/top_rated" customClass="topRatedMoviesStyle" perPage={6} />
      <PricingList  title="Select Your Plan"/>
      <OurPartners/>
    </PrimaryLayout>
  );
};
export default HomePage;
