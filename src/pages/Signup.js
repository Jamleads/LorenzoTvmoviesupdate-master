import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Spin.css";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <div
        className="main"
        style={{
          width: "650px",
          height: 570,
          textAlign: "center",
          backgroundColor: "#020D1B",
        }}
      >
        <div className="img1">
          {" "}
          <img src="/image 10.png" alt="" />
        </div>
        <img
          className="spin"
          src="/image 11.png"
          alt=""
          style={{ width: 300, height: 300 }}
        />
      </div>
      <div className="form_container">
        <h2>SIGN UP</h2>
        <p style={{ marginLeft: -150 }}>Welcome lets get to know you</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={handleOnChange}
            />
          </div>
          <div>
            {/* <label htmlFor="email">Username</label> */}
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Full Name"
              onChange={handleOnChange}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Sign up</button> <br />
          <div className="span">
            Already have an account?{" "}
            <span>
              <Link to={"/signin"}>Login</Link>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
