import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";
export const Shop = () => {
  const {islogin} = useContext(ShopContext)
  return (
    
    <div className="shop">
      {islogin?<div>
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      </div>:<><h1>please login </h1></>}
    </div>
  );
};
