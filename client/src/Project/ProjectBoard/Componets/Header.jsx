import React from "react";
import { useState } from "react";




export default function Header() {
    const [projectName, setprojectName] = useState("DemoProject");

    return (
        <div className="flex justify-between justify-between">
            <h1 className="font-sans text-3xl">{projectName}</h1>
            <a href="/workspace">
                <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    WorkSpace
                </button>
            </a>

        </div>
    )
}