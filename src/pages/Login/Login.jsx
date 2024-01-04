

import React, { useContext, useState } from 'react';
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
function Login() {

    const {islogin,setIslogin} = useContext(ShopContext)
     const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
        setIslogin(true);
        if(islogin){
            navigate("/")
        }
        // else{
        //      navigate("/login")

        // }
    } catch (error) {
        setIslogin(false)
     
      console.error('Error during login:', error);
    }
  };
const handleClick=()=>{
  if(islogin){
    navigate("/")
}

}
  return (
    <div>
        {}
        <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" onClick={handleClick}>Login</button>
      </form>

        </div>
    </div>
  );
}

export default Login;
