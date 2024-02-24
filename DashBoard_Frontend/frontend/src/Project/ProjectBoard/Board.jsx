import React from "react";

import Sidebar from "../Components/Sidebar";
import Header from "./Componets/Header";
import Issue from "./Componets/IssuesScreen";
import IssueSearch from "./Componets/IssueSearch";

export default function Board(){
    return(
        <div className="flex flex-row ">
            <Sidebar/>
            <div className="flex flex-col px-8 py-8 w-screen">
                <Header></Header>
                <IssueSearch></IssueSearch>
                <Issue></Issue>
            </div>
            
        </div>
    )
}