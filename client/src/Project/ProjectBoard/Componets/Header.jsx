import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "@reach/router";



export default function Header() {
    const [projectName, setprojectName] = useState("DemoProject");

    return (
        <div className="flex justify-between justify-between">
            <h1 className="font-sans text-3xl text-white">{projectName}</h1>
            <a href="/workspace">
                <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    WorkSpace
                </button>
            </a>

        </div>
    )
}