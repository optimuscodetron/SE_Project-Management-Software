import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router, Redirect } from '@reach/router';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Invite from './invitation/Invite';
import Otp from './Authantication/Forgetpassword/otp';

import Login from './Authantication/views/Login';
import Registration from './Authantication/views/Registration';
import Email from './Authantication/Forgetpassword/email';
import loginbutton from "./Authantication/views/Login";

import Board from './Project/ProjectBoard/Board';
import Settings from './Project/ProjectSettings/Settings';
import Workspace from './Workspace';

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
        <div className="App">
            <loginbutton />
            <BrowserRouter>
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
                    <Route  path="/login" element={<Login />} />
                    <Route path="/invite" element={<Invite/>} />

                    <Route  path="/workspace" element={<Workspace />} />
                    <Route  path="/workspace/project/board" element={<Board />} />
                    <Route  path="/workspace/project/settings" element={<Settings />} />
                    {/* <Route component={PageError} /> */}
                </Routes>
            </BrowserRouter>
        </div >
    );
}

export default App;
