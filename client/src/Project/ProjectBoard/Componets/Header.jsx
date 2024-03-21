import React from "react";
import { useState } from "react";





export default function Header() {
    const [projectName, setprojectName] = useState("DemoProject");

    return (
        <div className="flex justify-between md:flex-row flex-col mb-2 ">
            <h1 className="font-sans text-3xl tracking-wider text-white font-['quicksand'] text-center">{projectName}</h1>

        </div>
    )
}