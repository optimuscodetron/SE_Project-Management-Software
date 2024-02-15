import React, { useState } from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';

const Registration = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            email,
            name,
            password,
            confirmPassword
        }
        Axios.post('http://localhost:8000/api/users', newUser, { withCredentials: true })
            .then(res => {
                console.log("User created successfully: " + res.data.user_id);
                localStorage.setItem('userID', res.data.user._id);
                localStorage.setItem('userName', res.data.user.name);
                navigate("/welcome");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            });
    }
    const bodyStyle = {
        margin: 0,
        height: "100vh", // Set body height to full viewport height
        background: "linear-gradient(-45deg, #020024, #090979, #00d4ff)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
    };
    const formStyle = {
        backgroundColor: "rgba(255, 255, 255, 0)", // Transparent white
        padding: "20px",
        borderRadius: "10px",
        border: "none",
    };

    return (
        <div style={bodyStyle}>

            <div className="container">
                <div className="row">
                    <div className="col text-center mt-5">
                        <h1 className="display-3">TrackerX</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card p-4 shadow rounded border" style={formStyle}>
                            <h2 className="font-weight-bold text-center mb-4">Sign up for your account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    {errors && (
                                        <span className="text-danger">
                                            {errors?.email?.properties?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    {errors && (
                                        <span className="text-danger">
                                            {errors?.name?.properties?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Enter full name" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    {errors && (
                                        <span className="text-danger">
                                            {errors?.password?.properties?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" placeholder="Create password" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    {errors && (
                                        <span className="text-danger">
                                            {errors?.confirmPassword?.properties?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-primary btn-lg btn-block">Sign Up</button>
                                </div>
                            </form>
                            <div className="text-center">
                                <Link to="/login" style={{ color: 'white' }}>Already have an account? Log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
