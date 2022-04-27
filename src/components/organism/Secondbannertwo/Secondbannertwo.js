import React from "react";
import commontext from "../../../static/json/common.json";
import "./Secondbannertwo.css";

const Secondbannertwo = (props) => {
  return (
    <React.Fragment>
      {commontext.map((bannertext, index) => (
        <div key={index} name="Secondary Banner 2">
          <section className="container d-lg-block container">
            <div className="row">
              <div className="col-12 col-lg-12 px-0">
                <div className="titulos">
                  <h1>
                    {bannertext.thirdbanner.thirdbanner_product}
                    <p>
                      <b>{bannertext.thirdbanner.thirdbanner_disc}</b>
                    </p>
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="o-promoOne container">
            <div className="col-md-4 m-banners p-0">
              <img
                alt="third banner firstimage"
                src={bannertext.secondbanner.secondbimage1}
              />
              <div className="banner-promo01-desc category black">
                <h1>
                  {bannertext.thirdbannerdesc.thirdbanner_imageonehead}
                  <p>{bannertext.thirdbannerdesc.thirdbanner_imageonepara}</p>
                </h1>
              </div>
            </div>
            <div className="col-md-4 m-banners p-0">
              <img
                alt="third banner firstimage"
                src={bannertext.secondbanner.secondbimage2}
              />
              <div className="banner-promo01-desc category black">
                <h1>
                  {bannertext.thirdbannerdesc.thirdbanner_imagetwohead}
                  <p>{bannertext.thirdbannerdesc.thirdbanner_imagetwopara}</p>
                </h1>
              </div>
            </div>
            <div className="col-md-4 m-banners p-0">
              <img
                alt="third banner firstimage"
                src={bannertext.secondbanner.secondbimage3}
              />
              <div className="banner-promo01-desc category black">
                <h1>
                  {bannertext.thirdbannerdesc.thirdbanner_imagethreehead}
                  <p>{bannertext.thirdbannerdesc.thirdbanner_imagethreepara}</p>
                </h1>
              </div>
            </div>
          </section>
        </div>
      ))}
    </React.Fragment>
  );
};
export default Secondbannertwo;
