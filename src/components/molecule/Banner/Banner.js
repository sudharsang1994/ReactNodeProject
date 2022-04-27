import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <header>
      <div className={props.bannerhead}>
        <div className={props.bannersechead}>
          <img
            className={props.bannerclass}
            src={props.imageurl}
            alt={props.banneralt}
          />
        </div>
        <div className={props.descClassname}>{props.children}</div>
      </div>
    </header>
  );
};
export default Banner;
