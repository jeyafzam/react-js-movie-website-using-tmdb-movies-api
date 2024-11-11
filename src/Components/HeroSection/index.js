import { useState } from "react";
import "./style.css";
import CategoryList from "../CategoryList";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Movies");

  return (
    <div className="herosection">
      <div className="content_head relative ov">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="content_title">Recently Updated</h2>
            </div>
            <ul className="content_tabs ov row  justify-start align-center">
              <li className="nav_item">
                <button
                  className={`button cp  row   justify-start relative  align-center ${
                    activeTab === "Movies" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Movies")}
                >
                  Movies
                </button>
              </li>
              <li className="nav_item">
                <button
                  className={`button cp row   justify-start relative  align-center  ${
                    activeTab === "TV Shows" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("TV Shows")}
                >
                  TV Shows
                </button>
              </li>
              <li className="nav_item">
                <button
                  className={`button cp row   justify-start relative  align-center  ${
                    activeTab === "Anime" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Anime")}
                >
                  Anime
                </button>
              </li>
              <li className="nav_item">
                <button
                  className={`button cp row  justify-start relative  align-center  documentaries  ${
                    activeTab === "Documentaries" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Documentaries")}
                >
                  Documentaries
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        {activeTab === "Movies" && (
          <CategoryList category="movie/popular" type="movie" limit={12} />
        )}
        {activeTab === "TV Shows" && (
          <CategoryList category="tv/popular" type="tv" limit={12} />
        )}
        {activeTab === "Anime" && (
          <CategoryList category="anime/popular" type="anime" limit={12} />
        )}
        {activeTab === "Documentaries" && (
          <CategoryList category="movie/popular?with_genres=99" type="documentaries" limit={12}/>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
