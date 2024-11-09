import SeconderyLayout from "../../Components/Layouts/SeconderyLayout";
import OurFeatures from "../../Components/OurFeatures";
import OurPartners from "../../Components/OurPartners";
import RoadmapSlider from "../../Components/Roadmap";
import { useEffect } from "react";
import { pageTitleMaker } from "../../Helpers/titleMaker";

import "./style.css"
const AboutUs = () => {
  window.scrollTo(0, 0);
  useEffect(function(){
    pageTitleMaker("FlixGo-Online About Us ")
 },[])
  return (
    <SeconderyLayout pageTitle="About Us">
      <div className="feature_section">
        <div className="container">
          <div className="row">
            <OurFeatures
              title="FLIXGO – Best Place for Movies"
              textone="Welcome to FlixGo movie site, the ultimate destination for all film enthusiasts. Immerse yourself in a world of captivating stories, stunning visuals, and unforgettable performances. Explore our extensive library of movies, spanning across genres, eras, and cultures. "
              texttow="Indulge in the joy of cinema with our curated collections, featuring handpicked movies grouped by themes, directors, or actors.Dive into the world of cinematic magic and let yourself be transported to new realms of imagination and emotion."
            />
          </div>
        </div>
      </div>
      <section className="work_section section_dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section_title">How It Works</h2>
            </div>

            <div className="col-4">
              <div className="how">
                <span className="how_number">01</span>
                <h3 className="how_title">Create an account</h3>
                <p className="how_text">
                  Start your movie-watching journey by creating a personalized
                  account on our platform. Sign up easily and gain access to a
                  world of entertainment.
                </p>
              </div>
            </div>

            <div className=" col-4">
              <div className="how">
                <span className="how_number">02</span>
                <h3 className="how_title">Choose your plan</h3>
                <p className="how_text">
                  Select the perfect plan that suits your preferences and
                  watching habits. We offer a range of subscription options from
                  basic plans to premium plans.
                </p>
              </div>
            </div>

            <div className=" col-4">
              <div className="how">
                <span className="how_number">03</span>
                <h3 className="how_title">Enjoy FlixGo</h3>
                <p className="how_text">
                  Immerse yourself in the world of FlixGo, where unlimited movie
                  streaming awaits. With our vast collection of movies there's
                  something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RoadmapSlider />
      <OurPartners />
    </SeconderyLayout>
  );
};
export default AboutUs;
