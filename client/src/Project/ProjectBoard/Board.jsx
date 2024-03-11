import React from "react";
import { useState } from "react";

import PSidebar from "../Components/PSidebar";
import Header from "./Componets/Header";
import Issue from "./Componets/IssuesScreen";
import IssueSearch from "./Componets/IssueSearch";

export default function Board(){
    const style={
        "backgroundColor":"rgb(31, 41, 55)",
    }
    
    return(
        <div className="flex flex-row h-screen">
            <PSidebar />
            <div className="flex flex-col px-8 py-8 w-screen" style={style}>
                <Header></Header>
                <IssueSearch></IssueSearch>
                <Issue></Issue>
            </div> 
            
        </div>
    )
}