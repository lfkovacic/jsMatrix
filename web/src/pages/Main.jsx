import React, { useState, useEffect } from "react";
import { getValue, setContent } from "../scripts/util";
import { DataTool } from "../tools/DataTool";
import "./styles.css"
import { ButtonPanel } from "../components";
export const Main = props => {

    const [data, setData] = useState([]);
    const analyzeData = () => {
        const str = getValue("str");
        const pattern = getValue("pattern");
        const newData = DataTool.analyzeData(DataTool.getMatchesArray(str, pattern))
        setData(newData)
    }

    const buttons = [
        {
            key: "buttonAnalyze",
            label: "Analyze data",
            function: analyzeData
        },
        {
            key: "clipboardTest",
            label: "Clipboard test",
            function: () => DataTool.copyToClipboard("test")
        }
    ]



    const formatData = _data => {
        return data.reduce((accumulator, current) => accumulator === "" ? current : `${accumulator}, ${current}`, "");
    }

    const handleGetArray = () => {
        const str = getValue("str");
        const pattern = getValue("pattern");
        setData(DataTool.getMatchesArray(str, pattern));
    }

    const removeDuplicates = () => {
        setData(DataTool.removeDuplicates(data));
    }

    const clearData = () => {
        setData([]);
    }
    const sortData = () => {
        setContent("content", formatData(data.sort()));
    }

    const printData = () => {
        setContent("content", formatData(data) + "\nTotal: " + data.length);
    }

    const updateLogText = (msg) => {
        document.getElementById("log").innerHTML += `<br>${msg}`;
    }

    useEffect(() => {
        console.log(data);
        printData();
    }, [data])
    const clearLogText = () => {
        document.getElementById("log").innerHTML = "";
    }

    const consoleLog = console.info;
    console.log = (msg, ...args) => {

        try {
            const msgStr = JSON.stringify(msg);
            consoleLog(msg, ...args);
            updateLogText(msgStr);
        } catch (e) {
            console.error(e);
        }

    }
    return (
        <div className="main section">
            <table className="layout" width={"100%"}>
                <tr id="row1">
                    <td style={{ width: "50%" }}>
                        <div className="input section">
                            <label for="str">String</label><br />
                            <input id="str"></input><br /><br />
                            <label for="pattern">Pattern</label><br />
                            <input id="pattern"></input><br /><br />
                            <button onClick={handleGetArray}>Get matches array</button>
                            <button onClick={removeDuplicates}>Remove duplicates</button>
                            <button onClick={clearData}>Clear data</button>
                            <button onClick={sortData}>Sort</button>
                        </div>
                    </td>
                    <td style={{ width: "50%" }}>
                        <div id="content" className="content section">

                        </div>
                    </td>
                </tr>
                <tr id="row2">
                    <td>
                        <div className="tools section">
                            <label for="util-button-pannel">Util button panel</label><br /><br />
                            <ButtonPanel id="util-button-panel" buttons={buttons} />
                        </div>
                    </td>
                    <td>
                        <div className="section">
                            TODO: add regex selection.
                        </div>
                    </td>
                </tr>
                <tr id="row3">
                    <td>
                        <div className="section">
                            <button onClick={clearLogText}>Clear log</button>
                        </div>
                    </td>
                    <td>
                        <div className="section">
                            <h2>log output:</h2>
                            <div className="log" id="log">
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}