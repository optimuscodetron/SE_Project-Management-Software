import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import history from 'browserHistory';
import Invite from './invitation';
import Board from './Project/ProjectBoard/Board';
import Settings from './Project/ProjectSettings/Settings';
import Workspace from './Workspace'
// import Authenticate from 'Auth/Authenticate';
// import PageError from 'shared/components/PageError';

const Routing = () => (
  <BrowserRouter>
      {/* <Navigate exact from="/" to="/workspace" /> */}
    <Routes>
      {/* <Route path="/authenticate" component={Authenticate} /> */}

      <Route exact path="/workspace" element={<Workspace/>} />
      <Route exact path="/workspace/project/board" element={<Board/>} />
      <Route exact path="/workspace/project/settings" element={<Settings/>} />
      <Route exact path="/Invite" element={<Invite/>} />
      {/* <Route component={PageError} /> */}
    </Routes>
  
 </BrowserRouter>
);

export default Routing;
