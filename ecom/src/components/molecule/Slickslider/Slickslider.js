import React from "react";
import Slider from "react-slick";
import slickslider from "../../../static/json/slickslider1.json";

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Slickslider = (props) => {
  return (
    <div>
      <Slider {...settings} className={props.slickclass}>
        {slickslider.map((record, index) => {
          return (
            <div key={index}>
              <img src={record.imgPath} alt={record.imagedesc} />
              <div className="card-body d-flex flex-column align-items-start pa-carousel">
                <p className="a-card-description description-size">
                  {record.desc}
                </p>
                <div className="d-flex flex-row m-ca-card-price align-items-center">
                  <p className="a-card-price">
                    {record.price}
                    <sup className="undefined">_</sup>
                  </p>
                  <p className="a-card-discount">
                    {record.disprice}
                    <sup className="undefined">{record.supetext}</sup>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Slickslider;
