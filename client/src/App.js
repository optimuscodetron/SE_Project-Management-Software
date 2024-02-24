import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Registration from './views/Registration';
import Email from  './Forgetpassword/email';
import { Router, Redirect } from '@reach/router';
import Main from './views/Main';
import NewUser from './views/NewUser';
import loginbutton from "./views/Login";
import { useEffect } from 'react';
import {gapi} from 'gapi-script';
import Otp from './Forgetpassword/otp';

const clientid="495965121219-65gvv679mrctt1ksda4048jtmu4r1to4.apps.googleusercontent.com";


function App() {
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientid:clientid,
                scope:""
            })

        };
        gapi.load('client:auth2',start);
    })
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="App">
            <loginbutton />
            <Router>
                <Redirect from="/" to="/register" noThrow />
                 {/* <Route path='/user/otp' element={<Otp />} /> */}

                <Registration path="/register" />
                <Email path = "/email"/>
                <Login path="/login" />
                {/* <Main path="/home" onSubmit={onSubmit} /> */}
                <Main path="/home/geer/:id" onSubmit={onSubmit} />
                <NewUser path="/welcome"/>
            </Router>
        </div>
    );
}

export default App;
