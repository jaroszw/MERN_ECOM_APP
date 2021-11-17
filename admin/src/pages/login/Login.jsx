import React, { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const hadnleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(user, dispatch);
    console.log(user);
  };

  return (
    <div className="login">
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={hadnleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={hadnleChange}
      />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;
