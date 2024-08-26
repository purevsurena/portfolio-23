import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../../src/assets/scss/main/portfolio2.css";

const mobileApp = [
  {
    id: 1,
    name: "TomYo Skills",
    imgName: "skills-app.png",
  },
  {
    id: 2,
    name: "NFTRace",
    imgName: "nft-race.png",
  },
  {
    id: 3,
    name: "TomYo Class",
    imgName: "class-app.png",
  },
  {
    id: 4,
    name: "Lingo",
    imgName: "lingo-app.png",
  },
  {
    id: 5,
    name: "Stoovo",
    imgName: "stoovo-app.png",
  },
  {
    id: 6,
    name: "TomYo Mentor",
    imgName: "mentor-app.png",
  },
  {
    id: 7,
    name: "TomYo V2",
    imgName: "tomyo-v2-app.png",
  },
  {
    id: 8,
    name: "UB Password",
    imgName: "ubp.png",
  },
];

var settings = {
  className: "slick-center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  responsive: [
    {
      breakpoint: 1965,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Portfolio2 = () => {
  const sliderRef = useRef();

  return (
    <div className="container-portfolio2">
      <Slider
        ref={sliderRef}
        centerMode
        arrows={false}
        {...settings}
        className="inner-container"
      >
        {mobileApp.map((app) => (
          <div className="app-container"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="100">
            <img
              width="100%"
              height="100%"
              src={require(`../assets/images/projects/${app.imgName}`)}
            />

            <h5 className="app-title">{app.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio2;
