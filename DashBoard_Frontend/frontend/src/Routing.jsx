import React from 'react';
import { BrowserRouter,Router, Routes, Route, Navigate } from 'react-router-dom';

// import history from 'browserHistory';
import Project from './Project';
// import Authenticate from 'Auth/Authenticate';
// import PageError from 'shared/components/PageError';

const Routing = () => (
  <BrowserRouter>
      <Navigate exact from="/" to="/project" />
    <Routes>
      {/* <Route path="/authenticate" component={Authenticate} /> */}
      <Route path="/project" element={<Project/>} />
      {/* <Route component={PageError} /> */}
    </Routes>
  
 </BrowserRouter>
);

export default Routing;
