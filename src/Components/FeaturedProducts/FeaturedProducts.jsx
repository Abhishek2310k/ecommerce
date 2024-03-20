import React, { useState ,useEffect} from "react";
import Card from "../Card/Card";
import axios from 'axios';
import "./FeaturedProducts.scss";
import useFetch from "../Hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  
  const {data,loading,err} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {loading === true ? "loading" : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;