import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img src="https://img.freepik.com/free-photo/beautiful-modern-girl-holding-smartphone-pointing-finger-aside-showing-promotional-text-copyspace-while-using-mobile-phone-standing-pink-background_1258-123288.jpg?w=740&t=st=1699892976~exp=1699893576~hmac=3c43070842ae3b272118d24eb76365388ea9a397c9f9afbf6ba6355a7b306254" className="card-img" alt="card-img"  height='630px'/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">

          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
