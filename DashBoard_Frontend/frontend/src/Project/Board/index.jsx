import React from "react";

import Header from "./Header";
import Issue from "./Issues";
import IssueSearch from "./IssueSearch";

export default function Board(){
    return(
        <div className="flex flex-col px-8 py-8 w-screen">
            <Header></Header>
            <IssueSearch></IssueSearch>
            <Issue></Issue>
            
        </div>
    )
}