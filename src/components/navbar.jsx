import React, { useContext } from "react";
import {ShopContext} from '../context/shop-context'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
export const Navbar = () => {
  const {islogin} = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="links">
        {islogin?  
        <div> 
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/logout"> Logout </Link>
        </div>:
        <Link to="/login"> Login </Link>
}
      </div>
    </div>
  );
};
