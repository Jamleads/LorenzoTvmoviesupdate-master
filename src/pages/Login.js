import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Spin.css';
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
    });
  };

  return (
    <div  className="container"  style={{display:"flex",}}>
     
      <div className="main" style={{width:"650px", height:570, textAlign:"center", backgroundColor:'#020D1B'}}>
        <div className="img1">  <img src="/image 10.png" alt="" /></div>
        <img className="spin" src="/image 11.png" alt="" style={{width:300, height:300,}} />
      </div>
      <div className="form_container">
          <h2>LOGIN</h2>
          <p>welcome back, good to see you again!</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div>
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div> <br />
            <div>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={handleOnChange}
              />
            </div>
            <div className="forget">Forgot Password</div>
          <button type="submit">Sign up</button> <br />
          <div className="span">
          Don’t have an account? <span> <Link to={"/signup"}>Signup</Link></span> 
          </div>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;