import React from 'react';

import Sidebar from '../Components/Sidebar';
const Settings=()=>{
    return(
        <div className="flex flex-row w-screen">
            <Sidebar/>
            <div className="flex flex-col px-8 py-8">
                ProjectSettings
            </div>
            
        </div>
    )
}
export default Settings;