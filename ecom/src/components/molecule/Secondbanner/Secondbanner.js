import React from "react";
import "./Secondbanner.css";
import Link from "../../atoms/Link";
import commontext from "../../../static/json/common.json";
// import { RecordVoiceOver } from "@material-ui/icons";

const Topbanner = (props) => {
  const mbanner_first = {
    width: "100%",
    height: "auto",
    maxHeight: "340px",
  };
  return (
  
    <div name="Secondary Banner 1">
          {commontext.map((bannertext, index) => (
      <div key={index} className="mbanner">
        <div className="col-md-8 mbanner_first">
          <Link href="abc.com">
            <img
              style={mbanner_first}
              alt="First Product"
              src={bannertext.thirdbanner.thirdbimage2}
            />

            <div className="text-promo-1">
              <h4>
                <p>{bannertext.secondbanner.bannerdesc}</p>
                <p>
                  <b>{bannertext.secondbanner.bannerdisc}</b>
                </p>
              </h4>
            </div>

            <div className="banner-promo01a-desc category black">
              <h1>{bannertext.secondbanner.itemdeschead }<p>{bannertext.secondbanner.bannerheaddesc}</p></h1>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link href="abc.com">
            <img
              style={mbanner_first}
              alt="Second Product"
              src={bannertext.secondbanner.secondbimage4}
            />
            <div className="banner-promo01a-desc category black">
              <h1 style={{"marginLeft": "159px"}}>{bannertext.secondbanner.itemdeschead2}<p>{bannertext.secondbanner.bannerheaddesc2}</p></h1>
            </div>
          </Link>
        </div>
      </div>
        ))}
    </div>
   
  );
};
export default Topbanner;
