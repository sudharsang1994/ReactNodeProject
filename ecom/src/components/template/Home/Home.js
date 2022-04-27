import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../organism/header/Header";
import HomeBody from "../../template/HomeBody";
import Footer from '../../organism/Footer/Footer';
import Product from '../../template/Product/Product';

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header />
        <Routes>
            <Route path="/" element={<HomeBody />} />
            <Route path="/Product" element={<Product />} />          
          </Routes>
        <Footer />
      </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default Home;
