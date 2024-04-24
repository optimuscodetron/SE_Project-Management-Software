import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";

const UserPopUp = () => {
    // Initials of the user's name
    const nameInitials = "NG";
    
    // State to track whether the dropdown is open
    const [userInfo, setUserInfo] = useState(false);
    
    // Reference to the dropdown element
    const dropdownRef = useRef(null);
    
    // Function to toggle the state of the dropdown
    const toggleUserInfoHandler = () => {
        // Toggle the `userInfo` state
        setUserInfo((prevState) => !prevState);
    };

    // Function to handle clicks outside the dropdown
    const handleOutsideClick = (event) => {
        // Check if the clicked target is outside the dropdown element
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            // Close the dropdown
            setUserInfo(false);
        }
    };

    // Use effect to attach and remove the event listener for outside clicks
    useEffect(() => {
        // Attach the event listener when the component mounts
        document.addEventListener('click', handleOutsideClick);
        
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []); // Empty dependency array ensures this effect runs only on mount and unmount

    // User's name and email ID for displaying in the dropdown
    const userName = "Nikhil Garg"; 
    const userEmailId = "nikhilgarg@gmail.com";

    return (
        <div className="flex flex-col relative" ref={dropdownRef}>
            {/* Button to toggle the dropdown */}
            <button
                id="dropdownInformationButton"
                data-dropdown-toggle="dropdownInformation"
                className="text-white bg-blue-700 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
                type="button"
                onClick={toggleUserInfoHandler}
            >
                {nameInitials}
            </button>
            
            {/* Dropdown content */}
            {userInfo && (
                <div  className="z-10 bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-0">
                    {/* User information */}
                    <div className="px-4 py-3 text-sm text-white dark:text-white">
                        <div>{userName}</div>
                        <div className="font-medium truncate">{userEmailId}</div>
                    </div>
                    
                    {/* Navigation links */}
                    <ul className="text-sm text-gray-700 dark:text-gray-200 p-0">
                        <li>
                            <NavLink
                                to="/workspace"
                                className="flex text-white justify-center w-full py-2 text-decoration-none"
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/workspace/settings/profile"
                                className="flex text-white justify-center w-full py-2 text-decoration-none"
                            >
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                    
                    {/* Sign out link */}
                    <div>
                        <NavLink
                            to="/"
                            className="flex text-white justify-center w-full py-2 text-sm text-decoration-none"
                        >
                            Sign out
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPopUp;
