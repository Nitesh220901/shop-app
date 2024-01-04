import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context";

const Logout = () => {
    const {setIslogin} = useContext(ShopContext)
  return (
    <div>
        {setIslogin(false)}
      <h1>you are Logged Out..</h1>
    </div>
  )
}

export default Logout
