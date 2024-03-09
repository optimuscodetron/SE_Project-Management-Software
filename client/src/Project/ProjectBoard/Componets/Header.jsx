import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "@reach/router";



export default function Header() {
    const [projectName, setprojectName] = useState("DemoProject");

    return (
        <div className="flex justify-between justify-between">
            <h1 className="font-sans text-3xl tracking-wider text-white font-['quicksand']">{projectName}</h1>
            <a href="/workspace">
                <button type="button" class="text-white font-['quicksand']-700 text-sm tracking-wide font-semibold bg-[#d946ef] hover:bg-[#e879f9] focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    WorkSpace
                </button>
            </a>

        </div>
    )
}