import React from "react";
import "./Promoseccard.css";
import Link from "../../atoms/Link";
import Slickslider from "../../molecule/Slickslider/Slickslider";

class Promoseccard2 extends React.Component {
  render() {
    return (
      <div
        className="container my-5 homepage"
        style={{ minHeight: "300px", position: "relative" }}
      >
        <div className="carousel-heading justify-content-start">
          <Link href="#">Backpacks up to 30% off</Link>
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
export default Promoseccard2;