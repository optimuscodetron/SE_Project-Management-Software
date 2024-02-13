import React from 'react';
import { Route, Routes, useRouteMatch, useHistory,BrowserRouter,Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProjectSettings from './ProjectSettings';



export default function Project() {
    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar />
                   <Routes>
                        <Route
                            exact path={`project/settings`}
                            element={<ProjectSettings/>}
                        />
                    </Routes>
              
               {/* <ProjectSettings/> */}

            </div>
        </BrowserRouter>
    );
};