import React from "react";
import { useState } from "react";

import PSidebar from "../Components/PSidebar";
import Header from "./Componets/Header";
import Issue from "./Componets/IssuesScreen";
import IssueSearch from "./Componets/IssueSearch";
import PNavbar from "../Components/PNavbar";

export default function Board(){
    const style={
        "backgroundColor":"rgb(31, 41, 55)",
    }
    
    return(
        <div className="flex flex-col h-screen w-screen">
            <PNavbar/>
            <div className="flex flex-row">
                <PSidebar />
                <div className="flex flex-col px-3 py-3 w-full overflow-auto h-screen " style={style}>
                    <Header></Header>
                    <IssueSearch></IssueSearch>
                    <Issue></Issue>
                </div> 
            </div>
            
        </div>
    )
}