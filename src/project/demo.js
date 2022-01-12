import React, { Component } from "react";
import { useState } from "react";

class PicCat extends Component {}

function Cat2() {
  const [data, setData] = useState("");

  async function handleFetch() {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=100&order=DESC`
    );
    const responseData = await response.json();
    const prova = responseData.map((item) => item.url).toString();
    const prova2 = prova.toString();
    console.log(responseData);
  }

  // return console.log(this.prova2);
}

export default PicCat;
