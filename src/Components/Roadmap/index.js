import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "./style.css";
const roadmapData = [
  {
    quarter: "2024 Q2",
    tasks: [
      "Creating a database for movies and TV series including information on title, genre, actors, ratings and reviews.",
      "Development of a powerful search engine which will allow users to easily find films and TV series.",
    ],
  },
  {
    quarter: "2024 Q3",
    tasks: [
      "Developing a user registration and authorization system to create personal accounts.",
      "Implementation of the ability to save films or series in the 'Favorites' list, leave reviews and ratings.",
    ],
  },
  {
    quarter: "2024 Q4",
    tasks: [
      "Protection of user data, applying appropriate security protocols.",
      "Testing the site on different devices and browsers, fixing bugs and improving performance.",
    ],
  },
  {
    quarter: "2025 Q1",
    tasks: [
      "Introducing advanced search filters for more personalized movie and TV series recommendations.",
      "Launching a mobile application for the platform.",
    ],
  },
  {
    quarter: "2025 Q2",
    tasks: [
      "Enhancing platform scalability to handle more users.",
      "Introducing new features for user-generated content and interaction.",
    ],
  },
  {
    quarter: "2024 Q2",
    tasks: [
      "Creating a database for movies and TV series including information on title, genre, actors, ratings and reviews.",
      "Development of a powerful search engine which will allow users to easily find films and TV series.",
    ],
  },
  {
    quarter: "2024 Q3",
    tasks: [
      "Developing a user registration and authorization system to create personal accounts.",
      "Implementation of the ability to save films or series in the 'Favorites' list, leave reviews and ratings.",
    ],
  },
  {
    quarter: "2024 Q4",
    tasks: [
      "Protection of user data, applying appropriate security protocols.",
      "Testing the site on different devices and browsers, fixing bugs and improving performance.",
    ],
  },
  {
    quarter: "2025 Q1",
    tasks: [
      "Introducing advanced search filters for more personalized movie and TV series recommendations.",
      "Launching a mobile application for the platform.",
    ],
  },
  {
    quarter: "2025 Q2",
    tasks: [
      "Enhancing platform scalability to handle more users.",
      "Introducing new features for user-generated content and interaction.",
    ],
  },
];
const RoadmapSlider = () => {
  return (
    <div className="section_roadmap">
      <div className="container">
        <div className="col-12">
          <div className="roadmap_slider">
            <h2 className="roadmapsection_title"> Roadmap</h2>
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                autoplay: false,
                gap: "1rem",
                perMove: 1,
                pagination: true,
                breakpoints: {
                  1000: {
                    perPage: 2,
                  },
                  784: {
                    perPage: 1,
                  },
                },
              }}
            >
              {roadmapData.map((item, index) => (
                <SplideSlide key={index}>
                  <div
                    className={
                      index >= 2 && index <= 5
                        ? "roadmap_active"
                        : "roadmap-slide"
                    }
                  >
                    <h3 className="roadmap__title">{item.quarter}</h3>
                    <ul className="roadmap__list">
                      {item.tasks.map((task, idx) => (
                        <li
                          key={idx}
                          className={index >= 2 && index <= 5 ? "active" : ""}
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlider;
