import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2023 E-Mart, Inc</p>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-body-secondary">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link px-2 text-body-secondary">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link px-2 text-body-secondary">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link px-2 text-body-secondary">
              About
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
