import React from "react";
//import { useState  } from "react"
import "./cat.css";
import Catpic from "./catpic.jsx";
//import TotalCount from "./cart.jsx"
//import Buttons from "./buttons.jsx";

const Cat = () => {
  return (
    ///// try to print on the screen
    <div className="body">
      <div className="header">
        <div className="logo">The Cat Shop</div>
        <div className="menu"> Contact us</div>
        <div className="chart">Chart</div>
      </div>

      <div className="bodys">
        <div className="bodyin">
          <Catpic />
          <Catpic />
          <Catpic />
          <Catpic />
        </div>
      </div>
    </div>
  );
};

export default Cat;
