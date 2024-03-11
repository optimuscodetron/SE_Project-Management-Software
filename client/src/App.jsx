import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';


import Login from './Authantication/views/Login';
import Registration from './Authantication/views/Registration';
import Email from './Authantication/Forgetpassword/email';
import Otp from './Authantication/Forgetpassword/otp';
import Newpassword from './Authantication/Forgetpassword/newpassword';

// import Forgotpassword from './Authantication/Forgetpassword/forgotpassword';
import loginbutton from "./Authantication/views/Login";

import Board from './Project/ProjectBoard/Board';
import Settings from './Project/ProjectSettings/Settings';
import Workspace from './Workspace/workspace'
import WorkPage from "./Create_workspace/Components/WorkPage";

import General from './Workspace/Settings/General/General';

const clientid = "495965121219-65gvv679mrctt1ksda4048jtmu4r1to4.apps.googleusercontent.com";


function App() {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientid: clientid,
                scope: ""
            })

        };
        gapi.load('client:auth2', start);
    })
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
       <>
            <loginbutton />
         
                {/* <Redirect from="/" to="/register" noThrow /> */}
                {/* <Route path='/user/otp' element={<Otp />} /> */}

                {/* <Registration path="/register" /> */}
                {/* <Email path="/email" /> */}
                {/* <Login path="/login" /> */}
                {/* <Main path="/home" onSubmit={onSubmit} /> */}
                {/* <Main path="/home/geer/:id" onSubmit={onSubmit} /> */}
                {/* <NewUser path="/welcome" /> */}
                <Routes>
                    {/* <Route path="/authenticate" component={Authenticate} /> */}
                    {/* <Route exact path="/register" element={< />} /> */}
                    <Route  path="/register" element={<Registration />} />
                    <Route  path="/email" element={<Email />} />

                   

                    {/* by ayush */}
                    <Route path="/create_workspace" element={<WorkPage/>}> </Route>
                    <Route path="/workspace/settings/general" element={<General/>}> </Route>
                  
                   
                   


                    <Route  path="/otp" element={<Otp />} />
                    <Route  path="/newpassword" element={<Newpassword />} />
                    <Route  path="/" element={<Login />} />



                    <Route  path="/workspace" element={<Workspace />} />
                    <Route  path="/workspace/project/board" element={<Board />} />
                    <Route  path="/workspace/project/settings" element={<Settings />} />


                    <Route path="/create_workspace" element={<WorkPage/>}> </Route>
                    {/* <Route component={PageError} /> */}
                </Routes>
            
       </>
    );
}

export default App;