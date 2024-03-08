import React from 'react';

import PSidebar from '../Components/PSidebar';
const Settings=()=>{
    return(
        <div className="flex flex-row w-screen">
            <PSidebar/>
            <div className="flex flex-col px-8 py-8">
                ProjectSetting
            </div>
            
        </div>
    )
}
export default Settings;