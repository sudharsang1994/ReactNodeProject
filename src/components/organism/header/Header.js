import React from "react";
import HeaderDomain from "../../molecule/HeaderDomain";
import Searchbar from "../../molecule/Searchbar/Searchbar";
import Submenu from "../../molecule/Submenu";
import Information from "../../../static/json/information.json";
import logoInfo from "../../../static/json/common.json";
import TopLinks from "../../../static/json/Header.json";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>

            <div className="o__header">
              {/* Top Promotion Section */}
                <div className="m-promotions text-center d-none d-lg-block">
                  <img
                    src="https://assetspwa.liverpool.com.mx/assets/digital/home/img/cintillo_registrate_010919.jpg"
                    className="a-promotions__banner"
                    id="promotions__banner"
                    alt="Promotion"
                  />
                </div>
              {/* Domain Section */}
                <div className="o-container__fluid container-fluid wrap-boutiques d-none d-lg-block">
                  <HeaderDomain />
                </div>
              {/* End of Domain Section */}
              {/* main Header */}
                <div className="o-container__fluid container-fluid">
                  <div className="o-container container-fluid p-0">
                    <div className="m-searchBar">
                      <div className="o-checkout__header o-row row align-items-center no-gutters py-3 py-lg-2">
                        {/* Logo Section */}
                      
                        <div className="o-col col-lg-auto col-6 order-2 order-lg-1 text-center min-width-logo">
                       
                          <Link to='/' rel="preload">
                          {logoInfo.map((record, index) => {
                  return (
                            <img key={index}
                             src={record.logodetails.logoimgPath} 
                             alt={record.logodetails.imagedesc}
                             className="a-header__logo"
                            />
                            );
                          })}
                          </Link>
                         
                        </div>
                      
                        {/* Searchbar Section */}

                        <div className="o-col col-lg order-4 order-lg-2 pt-3 pt-lg-0">
                          <Searchbar
                            placeholder="Search"
                            data={Information}
                            searchclass="m-header__searchBar"
                          />
                        </div>
                        <div className="o-col col-lg-auto d-none d-lg-flex text-center order-lg-3">
                          <a
                            className="a-header__topLink"
                            href="http://"
                            style={{ cursor: "pointer" }}
                          >
                              {TopLinks.map((record, index) => {
                  return (
                            <font key={index} style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                                {record.logintext}
                              </font>
                            </font>
                              );
                            })}
                          </a>
                        </div>
                        <div className="o-col col-lg-auto d-none d-lg-flex text-center order-lg-4 sessionMinWidth">
                          <span className="a-header__topLink">
                          {TopLinks.map((record, index) => {
                  return (
                            <font key={index} style={{ verticalAlign: "inherit" }}>
                              <font style={{ verticalAlign: "inherit" }}>
                             
                                {record.myshopping}
                  
                              </font>
                            </font>
                              );
                            })}
                          </span>
                        </div>
                        <div className="o-col col-lg-auto col-3 col-md-5 cartdirection text-lg-center text-right order-3 order-lg-5">
                          <ShoppingCartIcon />
                        </div>

                        {/* End of Searchbar Section */}
                        {/* End of Logo Section */}
                      </div>
                    </div>
                  </div>
                </div>
              {/* end of main Header */}
              {/* Sub Menu Section */}

              <Submenu />

              {/* End of Sub Menu Section */}
            </div>
      </React.Fragment>
    );
  }
}
export default Header;
