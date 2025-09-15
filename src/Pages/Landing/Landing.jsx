import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Carousell from "../../Components/Carousel/Carousell";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <LayOut>
      <Carousell />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
