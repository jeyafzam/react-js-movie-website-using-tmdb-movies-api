import SeconderyLayout from "../../Components/Layouts/SeconderyLayout";
import OurFeatures from "../../Components/OurFeatures";
import PricingList from "../../Components/pricingList";
import "../../Components/OurFeatures/style.css";
import OurPartners from "../../Components/OurPartners";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";

const PricingPlans = () => {
  window.scrollTo(0, 0);
  useEffect(function () {
    pageTitleMaker("FlixGo-Online Pricing Plans");
  }, []);
  return (
    <SeconderyLayout pageTitle="Pricing Plans">
      <PricingList />
      <div className=" feature_section">
        <div className="container">
          <div className="row">
            <OurFeatures
              className="bg_color"
              title="Our Features"
              textone="Welcome to FlixGo movie site, the ultimate destination for all film enthusiasts. Immerse yourself in a world of captivating stories, stunning visuals, and unforgettable performances. Explore our extensive library of movies, spanning across genres, eras, and cultures. "
            />
          </div>
        </div>
      </div>
      <OurPartners />
    </SeconderyLayout>
  );
};
export default PricingPlans;
