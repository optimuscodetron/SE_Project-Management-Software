import { useState } from "react";
import 'react-router';
import Axios from "axios";

const NewPassword = () => {


    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState([]);
    const passwordRegex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;



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

    const formStyle = {
        padding: "20px",
        borderRadius: "10px",
        border: "none",
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


    const handleSubmit = (event) => {
        event.preventDefault();

        const error1 = {};

        if (!newPassword.trim()) {
            error1.newPassword = 'Password is required';
        } 
        else if (newPassword.length < 8) {
            error1.newPassword = 'Password must be at least 8 characters long';
        }
        else if (!isPasswordValid(newPassword)) {
            error1.newPassword = 'digit, upper case, lower case, special may missing'
        }


        if (confirmPassword != newPassword) {
            error1.confirmPassword = 'Please enter same password';
        }

        const updatePassword = {
            newPassword,
            confirmPassword
        }

        if (Object.keys(error1) == 0) {
            console.log(newPassword);
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

    return (
        <div className="newpassword" style={backgroundscreen}>
            <div className='pt-[20px] pb-16 m-auto w-[30%]'>
                <h1 className=' text-2xl mb-4 font-normal text-center' >Change Password</h1>
                <form onSubmit={handleSubmit} className='bg-gray-900 p-3 rounded-md mt-4' style={formStyle}>

                    {/* <p className="mt-3">New Password</p> */}
                    <div style={formStyle}>
                        <input
                            className="bg-gray-900 mt-[8px] border-[1px] p-2 hover:border-[2px] w-full h-full rounded-md"
                            type="password"
                            style={{ color: 'white' }}
                            placeholder="New Password"
                            value={newPassword}
                            onChange={handleChangesOnNewPassword}
                        />
                        {errors.newPassword && <p className="passwordCheck" style={passwordCheck}>{errors.newPassword}</p>}
                    </div>

                    {/* <p className="mt-3">Confirm Password</p> */}
                    <div style={formStyle}>
                        <input
                            className="bg-gray-900 mt-[2px] border-[1px] p-2 hover:border-[2px] w-full h-full rounded-md"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleChangesOnConfirmPassword}
                        />
                        {errors.confirmPassword && <p className="passwordCheck" style={passwordCheck}>{errors.confirmPassword}</p>}
                    </div>
                    <div style={buttonStyle}>
                        <button
                            type="submit"
                            className="px-4 py-1 mt-[2px] bg-purple-600 hover:bg-purple-700 rounded-md "
                        >Submit
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPassword;