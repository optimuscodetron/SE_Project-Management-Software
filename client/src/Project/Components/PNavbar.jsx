import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function PNavbar(props) {
    // return (
    //     <div>
    //         <button
    //             type="button"
    //             className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    //             onClick={props.showSideBarHandler}
    //         >
    //             <span className="sr-only">Open sidebar</span>
    //             <GiHamburgerMenu />
    //         </button>
    //         <nav class=" bg-[#111827]">
    //             <div class="w-full flex flex-wrap items-center justify-between">
    //                 <a href="www.TrackerX.com" class="flex items-center space-x-3 rtl:space-x-reverse no-underline hover:no-underline">
    //                     <span class="self-center text-2xl mx-5 font-semibold whitespace-nowrap tracking-wide dark:text-white ">TrackerX</span>
    //                 </a>
    //                 <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    //                     <span class="sr-only">Open main menu</span>
    //                     <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
    //                     </svg>
    //                 </button>
    //                 <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //                     <ul class="font-medium flex flex-col py-2 md:p-0 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
    //                         <li>
    //                             <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Sign Out</a>
    //                         </li>

    //                     </ul>
    //                 </div>
    //             </div>
    //         </nav>

    //     </div>

    // );
    const nameInitials = "NG";

    const [userInfo, setUserInfo] = useState(false);
    const openUserInfoHandler = () => {
        setUserInfo((prevState) => !prevState);
    };

    const userName = "Nikhil Garg";

    const userEmailId = "nikhilgarg@gmail.com";


    return (
    <div className=" w-full  top-0 ">
        <nav className="w-full bg-[#111827]">
            <div className="flex items-center justify-between h-14 px-3">
                <div className="flex items-center justify-start rtl:justify-end">

                    <button
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={props.showSideBarHandler}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <GiHamburgerMenu />
                    </button>

                    <a href="#" className="flex ms-2 md:me-24 text-decoration-none ">
                        <span className="self-center text-2xl mx-3 font-semibold whitespace-nowrap tracking-wide dark:text-white">
                            TrackerX
                        </span>
                    </a>

                </div>


                <div className="flex flex-col relative">

                    <button
                        id="dropdownInformationButton"
                        data-dropdown-toggle="dropdownInformation"
                        className="text-white bg-blue-700 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center "
                        type="button"
                        onClick={openUserInfoHandler}
                    >
                        {nameInitials}
                    </button>

                    <div
                        className={`z-10 ${userInfo ? "" : "hidden"
                            } bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-0`}
                    >
                        <div className="px-4 py-3 text-sm text-white dark:text-white">
                            <div>{userName}</div>
                            <div className="font-medium truncate">{userEmailId}</div>
                        </div>

                        <ul className="text-sm text-gray-700 dark:text-gray-200 p-0">
                            <li>
                                <a
                                    href="/workspace"
                                    className="flex  text-white justify-center w-full py-2 text-decoration-none "
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/workspace/settings"
                                    className="flex text-white justify-center w-full py-2 text-decoration-none"
                                >
                                    Settings
                                </a>
                            </li>
                        </ul>
                        <div className="">
                            <a
                                href="#"
                                className="flex text-white justify-center w-full py-2 text-sm text-decoration-none  "
                            >
                                Sign out
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    </div>
    );
}