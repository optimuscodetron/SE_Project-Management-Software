import { useState } from "react";
const UserPopUp=()=>{
    const nameInitials = "NG";

  const [userInfo, setUserInfo] = useState(false);
  const openUserInfoHandler = () => {
    setUserInfo((prevState) => !prevState);
  };

  const userName="Nikhil Garg";

  const userEmailId="nikhilgarg@gmail.com";
    return (
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
            className={`z-10 ${
              userInfo ? "" : "hidden"
            } bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-0`}
          >
            <div className="px-4 py-3 text-sm text-white dark:text-white">
              <div>{userName}</div>
              <div className="font-medium truncate">{userEmailId}</div>
            </div>

            <ul className="text-sm text-gray-700 dark:text-gray-200 p-0">
              <li>
                <a
                  href="#"
                  className="flex  text-white justify-center w-full py-2 text-decoration-none "
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
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
    );
}
export default UserPopUp;