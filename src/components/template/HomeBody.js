import React from "react";
import Advertisementcarousel from "../molecule/AdvertisementCarousel/Advertisementcarousel";
import Topbanner from '../organism/Topbanner';
import Promoseccard from '../organism/Promoseccard/Promoseccard';
import Promoseccardtwo from '../organism/Promoseccard/Promoseccardtwo';
import Secondbanner from '../molecule/Secondbanner/Secondbanner';
import Secondbannertwo from '../organism/Secondbannertwo/Secondbannertwo';
import Thirdbanner from '../organism/Thirdbanner/Thirdbanner';


class HomeBody extends React.Component {
  render() {
    return (     
      <React.Fragment>
        <Advertisementcarousel topslide="topslide"/>
        <Topbanner />
        <Promoseccard />
        <Secondbanner />
        <Promoseccardtwo />
        <Secondbannertwo />
        <Thirdbanner />
      </React.Fragment>
    );
  }
}
export default HomeBody;
