import React from "react";

import Header from "./Header";
import IssueSearch from "./IssueSearch";
import Issues from "./Issues";

export default function Board(){
    return(
        <div className="flex flex-col w-screen px-8 py-8">
            <Header></Header>
            <IssueSearch></IssueSearch>
            <Issues></Issues>      
        </div>
    )
}