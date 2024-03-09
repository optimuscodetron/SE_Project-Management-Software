import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import Axios from "axios";
import backgroundImage from './auth.jpg';

// import "./All.css";

import { GoogleLogin } from "react-google-login";
import { NavLink } from "react-router-dom";

// const clientid = "495965121219-65gvv679mrctt1ksda4048jtmu4r1to4.apps.googleusercontent.com";

// function login() {
//   const onSuccess = (res) => {
//     console.log("Login Success! Current User: ", res.profileObj);
//   }
//   const onFailure = (res) => {
//     console.log("login Failed res: ", res);
//   }
//   return (
//     <div id="siginbutton">
//       <GoogleLogin
//         clientId={clientid}
//         buttonText='Login with Google'
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         isSignedIn={true}
//       />
//     </div>

//   )
// }

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const clientid =
    "495965121219-65gvv679mrctt1ksda4048jtmu4r1to4.apps.googleusercontent.com";



  const onSuccess = (res) => {
    console.log("Login Success! Current User: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("login Failed res: ", res);
  };
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    Axios.post("http://localhost:8000/api/users/login", user, {
      withCredentials: true,
    })
      .then((res) => {
        localStorage.setItem("userID", res.data.user._id);
        localStorage.setItem("userName", res.data.user.name);
        console.log(`login succesful`);
        navigate("/create_workspace");
        window.location.reload();
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
  }
  const bodyStyle = {
    margin: 0,
    height: "100vh",
    background: `url(${backgroundImage})`,
    color: "#333",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow:"auto",
  };
  const formStyle = {
    backgroundColor: "rgba(17, 24, 39)",
    padding: "10px",
    
    border: "none",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    animation: "slideFromRight 1s linear both",
    transition: "all 0.5s ease",
    borderRadius: "200px",
  };
  const input = {
    // backgroundColor: "#191919",
    border: "none",

    borderBottom: "1px solid #ccc",
    marginBottom: "15px",
    animation: "animateInput 0.5s ease both",
  };

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-3 ">
            <h1 className="display-4" style={{ color: "#ffff" }}>
              TrackerX
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4">
            <div className="card p-5 shadow rounded border" style={formStyle}>
              <h2
                className="font-weight-bold text-center mb-5"
                style={{ color: "#ffff" }}
              >
                Log in to your account
              </h2>
              <form style={input} onSubmit={handleSubmit}>
                <div className="form-group">
                  {errors && (
                    <div className="alert alert-danger" role="alert">
                      {errors}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // style = {{background:'#191919'}}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // style = {{background:'#191919'}}
                  />
                </div>
                <div
                  className="text-center"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingTop: "0.1rem",
                  }}
                >
                  <NavLink
                    to="/email"
                    style={{
                      color: "#dcdcdc",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                    }}
                  >
                    Forgot Password
                  </NavLink>
                </div>

                <div
                  className="form-group text-center"
                  style={{ paddingTop: "0.8rem" }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: "rgb(147, 51, 234)" }}
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="text-center" id="siginbutton">
                <GoogleLogin
                  clientId={clientid}
                  buttonText="Login with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              </div>
              <br />
              <div className="text-center">
                <span style={{ color: "#dcdcdc" }}>
                  Don't have an account?&nbsp;  
                  <NavLink
                    to="/register"
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#dcdcdc"
                    }}
                  >
                    Sign up
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;