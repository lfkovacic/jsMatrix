import React from "react";
import { getValue, setContent } from "../scripts/util";
import { DataTool } from "../tools/DataTool";
import "./styles.css"
export const Main = props => {

    const handleGetArray = () => {
        const str = getValue("str");
        const pattern = getValue("pattern");
        setContent("content", DataTool.getMatchesArray(str, pattern).reduce((accumulator, current) => `${accumulator}, ${current}`, ""))

    }
    return (
        <div className="main">
            <div className="input">
                <label for="str">String</label><br />
                <input id="str"></input><br /><br />
                <label for="pattern">Pattern</label><br />
                <input id="pattern"></input><br /><br />
                <button onClick={handleGetArray}>Get Matches Array</button>
            </div> <br /><br />
            <div id="content" className="content">

            </div>
        </div>
    )
}