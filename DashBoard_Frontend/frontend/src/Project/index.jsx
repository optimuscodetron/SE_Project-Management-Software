import React from 'react';
import { Route, Routes, useRouteMatch, useHistory,BrowserRouter,Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import Sidebar from './Sidebar';
import ProjectSettings from './ProjectSettings';
import Board from './Board';

const Pstyle={
    display:'flex'
}

export default function Project() {
    return (
        <BrowserRouter>
            <div className="App" style={Pstyle}>
                <Sidebar />
                   <Routes>
                        <Route
                            exact path={`project/settings`}
                            element={<ProjectSettings/>}
                        />
                    </Routes>
                   <Routes>
                        <Route
                            exact path={`project/board`}
                            element={<Board/>}
                        />
                    </Routes>
              
               {/* <ProjectSettings/> */}

            </div>
        </BrowserRouter>
    );
};