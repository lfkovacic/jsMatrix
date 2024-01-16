import React, { useEffect, useState } from "react";
import { ButtonPanel } from "../components";
import { Table } from "antd";
import "./sandbox_script.js";

export const Sandbox = props => {

    const createNewScript = id => {
        const script = document.createElement("script");
        script.id = id;
        document.head.appendChild(script);
        return script;
    }

    const updateLogText = (msg) => {
        document.getElementById("log").innerHTML += `<br>${msg}`;
    }

    const consoleLog = console.log;
    console.log = (msg, ...args) => {

        try {
            consoleLog(msg, ...args);
            updateLogText(msg);
        } catch (e) {
            console.error(e);
        }

    }

    const sandboxScript = () => {
        //Ovdje ide kod za testiranje:

        const bar = "test - 123"
        const foo = (bar) => {
            console.log("Neka funkcija: " + bar);
            console.log(bar.bar2.bar3); //Baca error
        }

        foo(bar);
    }

    useEffect(() => {
        try {
            sandboxScript();
        } catch (e) {
            updateLogText(e.stack);
        }
    }, [])


    return (
        <div className="sandbox">
            <script src=".\src\pages\sandbox.js" />
            <div className="log-container">
                <h2>output:</h2>
                <div className="log" id="log">

                </div>
            </div>
        </div>

    )
}