import React from "react";
import "./Promoseccard.css";
import Link from "../../atoms/Link";
import Slickslider from "../../molecule/Slickslider/Slickslider";
// import Sliderdata from "../../../static/json/slickslider1.json";

class Promoseccard extends React.Component {
  render() {
    return (
      <div
        className="container my-5 homepage"
        style={{ minHeight: "300px", position: "relative" }}
      >
        <div className="carousel-heading justify-content-start">
          <Link href="#">Hearing aids up to 20% off</Link>
          <Link className="carouselHeading-link" href="#">
            see more
          </Link>
        </div>
      
            <div className="slick-slider slick-initialized">
          
              <Slickslider slickclass="slickstyle"/>
             
            </div>
        
      </div>
    );
  }
}
export default Promoseccard;