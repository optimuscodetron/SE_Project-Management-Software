import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";


export default function Header() {
    const [projectName, setprojectName] = useState("DemoProject");

    return (
        <div className="flex justify-between justify-between">
            <h1 className="font-sans text-3xl">{projectName}</h1>
            <a href="../workspace">
                <Button variant="gradient">Workspace</Button>
            </a>
        </div>
    )
}