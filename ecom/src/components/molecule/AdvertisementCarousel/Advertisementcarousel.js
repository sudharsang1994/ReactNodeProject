import React from "react";
import "../Searchbar/Searchbar.css";
import slidesData from "../../../static/json/secondleveladd.json";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Advertisementcarousel(props) {
  const settings = {
    infinite: true,
    speed: 300,
  };
  return (
    <div className={props.topslide}>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="slick-slide addslide">
              <label className="slick-slide-title">
                {slide.label}
                <a href={slide.url1}> {slide.title} </a>
              </label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Advertisementcarousel;
