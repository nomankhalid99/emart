import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://img.freepik.com/free-photo/full-length-shot-happy-asian-girl-going-vacation-tourist-with-suitcase-smiling-looking-upbeat_1258-149480.jpg?w=1380&t=st=1700058800~exp=1700059400~hmac=3838bd2f91b56eb75ecac9ab8beb2a755c0eaca4fbed75605be1cb8f9e062eba"
          className="card-img"
          alt="card-img"
          height="630px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
