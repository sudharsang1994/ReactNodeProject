import React from "react";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io";
import footerinfo from "../../../static/json/Footer.json";
import commontext from "../../../static/json/common.json";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="" style={{ position: "sticky", width: "100%" }}>
        <div className="container">
          <div className="row align-items-top">
            <div className="col-12 pb-3 pb-lg-5"></div>
            <div className="col-12 col-lg-8">
              <nav>
                <div className="row">
                  <div className="card-columns w-100">
                  <div className="col-12 col-lg order-1 p-0">
                         
                  {
                    footerinfo.map((rowdata, index)=> 
                     <div key={index}>
                        <h3 className="a-footer__sectionTitle">{rowdata.Footer_Text}</h3>
                       {
                         (typeof(rowdata.SubItem)=='object')?
                         <div>
                          {
                            rowdata.SubItem.map((subrowitem, index)=> 
                             <div key={index}>
                               <a className="a-footer__link" href="subrowitem.Action">
                               {subrowitem.Footer_Text}
                               </a>
                             </div>
                            )
                          }
                         </div>
                         :
                         null
                       }
                     </div>
                    )
                  }
                  </div>
                  </div>
                </div>
              </nav>
            </div>
           
            <div className="col-12 col-lg-4 d-footer--padding">
            {
            commontext.map((rowdata, index)=> (
              <div key={index} className="row">
                <div className="col-12 pt-3 pt-lg-0 order-1">
                  <a
                    className="a-footer__boletin"
                    href="/tienda/paginas/Boletin/boletin"
                  >
                    {rowdata.footerlink.subtext}
                  </a>
                </div>
                <div className="col-12 order-2 pt-3 text-center">
                  <p className="a-footer__contact text-lg-left">
                  {rowdata.footerlink.phone}
                  </p>
                  <p className="a-footer__contact text-lg-left">
                  {rowdata.footerlink.yourcellphone}
                  </p>
                  <p className="a-footer__contact text-lg-left"> 
                  {rowdata.yourcellphone}
                    <a
                      href="https://wa.me/525552629999"
                      style={{ color: "#e10098", textDecoration: "none" }}
                    >
                      {rowdata.footerlink.WhatsApp}
                    </a> { rowdata.footerlink.orbyphone}
                    </p>             
                </div>
              </div>
             ) )}
            </div>
          
            <div className="col-12 pt-4 pt-lg-5">
              <hr />
            </div>
          </div>
          {
            commontext.map((rowdata, index)=> (
          <div key={index} className="row align-items-center">
            <div className="col-12 col-lg-4 text-lg-left text-center order-1 pt-4 pb-2 pt-lg-3 pb-lg-3">
              <span className="a-footer__comments">
                {" "}
                {rowdata.footerlink.footerComment}
              </span>
              <span className="a-footer__comments">
                {" "}
                <a href="abc@def.com">{rowdata.footerlink.footeremail}</a>
              </span>
            </div>
            <div className="col-12 col-lg-4 text-center order-2 pb-4 pb-lg-0">
              <a
                className="a-footer__disclaimers"
               
                href="https://assetspwa.liverpool.com.mx/ayuda/index.html#/sec/terminos-y-condiciones/informacion"
              >
               {rowdata.footerlink.terms}
              </a>
              <span className="a-footer__slash">/</span>
              <a
                className="a-footer__disclaimers"
               
                href="https://assetspwa.liverpool.com.mx/ayuda/index.html#/sec/terminos-y-condiciones/proteccion-de-datos/aviso-clientes"
              >
                {rowdata.footerlink.notice}
              </a>
              <span className="a-footer__slash">/</span>
              <a
                className="a-footer__disclaimers"
                target="_blank"
                href="/tienda/sitemap"
              >
               {rowdata.footerlink.sitemap}
              </a>
            </div>
            <div
              className="col-12 col-lg-4 text-lg-right text-center order-3 pb-4 pb-lg-0"
              style={{ display: "flex" }}
            >
              <span className="profecco_main_container">
                <div className="profeco_container">
                  <a
                    href= {rowdata.footerlink.Action_profeco}
                    className="a_profeco"
                   
                  >
                    <img
                    alt="footer_property"
                      className="a_profeco_img"
                      src={rowdata.footerlink.profeco_img}
                    />
                  </a>
                </div>
              </span>
              <div style={{ display: "flex" }}>
                <a href={rowdata.footerlink.Action_linkedin} className="a-footer__socialMedia">
                  <IoLogoLinkedin />
                </a>
                <a href= {rowdata.footerlink.Action_facebook}className="a-footer__socialMedia">
                  <IoLogoFacebook />
                </a>
                <a href={rowdata.footerlink.Action_instagram} className="a-footer__socialMedia">
                  <IoLogoInstagram />
                </a>
              </div>
            </div>
          </div>
           ) )}
        </div>
        <div className="container-fluid m-footer__misc">
       
          <div className="col-12 col-lg-12 text-center">
          {
            commontext.map((rowdata, index)=> (
            <p key={index} className="a-footer__misc">
             {rowdata.footerlink.misc}
            </p>
            ) )}
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
