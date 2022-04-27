import React from "react";
import Banner from "../molecule/Banner/Banner";
import Link from "../atoms/Link";
import commontext from "../../static/json/common.json";

const Topbanner = (props) => {
  return (
    <div className="" style={{ height: "420px" }}>
      <Link href="abc.com">
      {commontext.map((bannertext, index ) => (
        <Banner key={index}
          bannerhead="bannerpos"
          bannerclass="banner_imagewidth"
          imageurl={bannertext.topheader.topbimage}
        >
          <div key={index} className="">
              <div className="bannertext banner-central-desc">
                <h1>{bannertext.topheader.h1text}</h1>
                <h6>{bannertext.topheader.ptext}</h6>
                <p>{bannertext.topheader.stext1}</p>
                <h5>{bannertext.topheader.bannerpercent}</h5>
                <p>{bannertext.topheader.stext2}</p>
              </div>
           
          </div>
        
        </Banner>
          ))}
      </Link>
    </div>
  );
};
export default Topbanner;
