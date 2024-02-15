import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import Axios from "axios";
// import "./All.css";

import { GoogleLogin } from 'react-google-login';
const clientid = "495965121219-65gvv679mrctt1ksda4048jtmu4r1to4.apps.googleusercontent.com";
function login() {
    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("login Failed res: ", res);
    }
    return (
        <div id="siginbutton">
            <GoogleLogin
                clientId={clientid}
                buttonText='Login with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>

    )
}

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const onSuccess = (res) => {
    console.log("Login Success! Current User: ", res.profileObj);
}
const onFailure = (res) => {
    console.log("login Failed res: ", res);
}
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    Axios.post("http://localhost:8000/api/users/login", user, {
      withCredentials: true,
      // papa
    })
      .then((res) => {
        localStorage.setItem("userID", res.data.user._id);
        localStorage.setItem("userName", res.data.user.name);
        navigate("/home");
      })
      .catch((err) => {
        setErrors(err.response.data.message);
      });
  }
  const bodyStyle = {
    margin: 0,
    height: "100vh", 
    background: "linear-gradient(-45deg, #020024, #090979, #00d4ff)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
  };
  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0)", 
    padding: "20px",
    borderRadius: "10px",
    border: "none",
  };

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0)", 
    border: "none", 
    borderBottom: "1px solid #ccc", 
    marginBottom: "15px",
  };

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 ">
            <h1 className="display-3">TrackerX</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5">
            <div className="card p-4 shadow rounded border" style={formStyle}>
              <h2 className="font-weight-bold text-center mb-4">
                Log in to your account
              </h2>
              <form onSubmit={handleSubmit}>
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
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="text-center" id="siginbutton">
            <GoogleLogin
                clientId={clientid}
                buttonText='Login with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
        <br/>
              <div className="text-center" >
                <Link to="/register" style={{ color: 'white' }}>Sign up for an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
