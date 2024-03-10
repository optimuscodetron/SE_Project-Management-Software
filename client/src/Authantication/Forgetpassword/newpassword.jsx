
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import 'react-router';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { passWordReset } from "../services/Apis";
// import { Spinner } from '@material-tailwind/react';
import Spinner from 'react-bootstrap/Spinner';


const NewPassword = () => {

  let email=localStorage.getItem("email");
  const [spiner, setSpiner] = useState(false);
  const navigate=useNavigate();
   
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState([]);
    const passwordRegex1 = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%#?&]{6,}$/;
    const handleSubmit = async(event) => {
        event.preventDefault();

        const error1 = {};

        if (!newPassword.trim()) {
            error1.newPassword = 'Password is required';
        } 
        else if (newPassword.length < 6) {
            error1.newPassword = 'Password must be at least 6 characters long';
        }



        if (confirmPassword != newPassword) {
            error1.confirmPassword = 'Please enter same password';
        }

        const data = {
            email,
            newPassword
            
        }
        setSpiner(true)


        if (Object.keys(error1) == 0) {
            const response = await passWordReset(data);
            // console.log(response)
            if (response.status === 200) {
    
              toast.success(response.data.message);
              setTimeout(() => {
                navigate("/")
              }, 5000)
            } else {
            //   toast.error(response.response.data.error)
            }
            console.log(newPassword);
            console.log(email);
            
        }
        else {
            setErrors(error1);
            return;
        }

        try {
            // Handle success
          } catch (err) {
            // Handle error
          }


    };

    function handleChangesOnNewPassword(event) {
        setNewPassword(event.target.value);


        setErrors(['']);
    }
    function handleChangesOnConfirmPassword(event) {
        setConfirmPassword(event.target.value);


        setErrors(['']);
    }


    const backgroundscreen = {
        // margin: 0,
        display: 'flex',
        backgroundColor: 'rgba(31, 41, 55, 1)',
        color: 'rgba(255,255,255,1)',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'

    };

   

    const buttonStyle = {
        display: 'flex',
        padding: "20px",
        borderRadius: "10px",
        border: "none",
        justifyContent: 'center',
        alignItems: 'center'
    };

    const passwordCheck = {
        color: 'red',
        fontSize: 10

    }

    const isPasswordValid = (password) =>
    {
        return passwordRegex1.test(password);
    }


    

    const bodyStyle = {
        margin: 0,
        height: "100vh", // Set body height to full viewport height
        background: "rgb(31,41,55)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        color: "#333",
        overflow: "hidden"

    };
    const formStyle = {
        backgroundColor: "rgba(255, 255, 255, 0)", // Transparent white
        padding: "20px",
        borderRadius: "10px",
        border: "none",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        animation: "slideFromRight 1s linear both",
        transition: "all 0.5s ease",
    };
    const input = {
        // backgroundColor: "#191919",
        border: "none",
        
        borderBottom: "1px solid #ccc",
        marginBottom: "15px",
        animation: "animateInput 0.5s ease both",
      };
    return (
        <>
            <div style={bodyStyle}>

                <div className="container">
                    <div className="row">
                        <div className="col text-center mt-3">
                            <h1 className="display-4" style={{color: "#ffff"}}>TrackerX</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-4">
                            <div className="card p-5 shadow rounded border" style={formStyle}>
                                <h2 className="font-weight-bold text-center mb-4" style={{color: "#ffff"}}>Password Reset</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        {errors && (
                                            <span className="text-danger">
                                                {errors?.email?.properties?.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" name = "password" placeholder="Enter your new password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" name = "password" placeholder=" Confirm your new password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                    </div>
                                 
                                 
                                
                                    
                                    <div className="form-group">
                                        {errors && (
                                            <span className="text-danger">
                                                {errors?.confirmPassword?.properties?.message}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary btn-lg btn-block" style = {{backgroundColor: 'rgb(147, 51, 234)'}} onClick={passWordReset}>Update
                                        {
                                                spiner ? <span><Spinner animation="border" /></span> : ""
                                            }
                                        </button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPassword