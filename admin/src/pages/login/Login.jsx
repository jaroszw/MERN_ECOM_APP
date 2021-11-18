import React, { useEffect, useState } from "react";
import { login } from "../../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser, navigate]);

  const hadnleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, user);
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
