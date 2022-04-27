import React from "react";
import "./Thirdbanner.css";
import commontext from "../../../static/json/common.json";

const Topbanner = (props) => {
  return (
  
    <div className="o-mainBanner container-fluid my-3">
        {commontext.map((bannertext, index) => (
       <div key={index} className="col-lg-12 p-0">
         
           <img 
           alt="Third banner" 
           src={bannertext.thirdbanner.thirdbimage1}/>
      
            <div className="cont-promo-menu">
                
              
                    <ul className="listshop">
                    <a href="abc.com"><li>{bannertext.thirdbannerlink.thirdbannerlink1}</li></a>
                    <a href="abc.com"><li>{bannertext.thirdbannerlink.thirdbannerlink2}</li></a>
                    <a href="abc.com"><li>{bannertext.thirdbannerlink.thirdbannerlink3}</li></a>
                    </ul>
                    
               
            </div>
        
        </div>
        ))}
    </div>
   
  );
};
export default Topbanner;
