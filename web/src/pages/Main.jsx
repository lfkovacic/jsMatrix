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
        console.log("Data");
        console.log(data);
        const newData = DataTool.analyzeData(DataTool.getMatchesArray(str, pattern))
        setData(newData)
    }

    const lookupIp = async () => {
        console.log("nslookup");
        const str = getValue("str");
        const pattern = getValue("pattern");
        const matches = DataTool.getMatchesArray(str, pattern);
        matches.forEach(entry => {
            console.log(chrome.dns.resolve(entry));
        });
    }
    const buttons = [
        {
            key: "buttonTest",
            label: "test",
            function: lookupIp
        },
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

    useEffect(() => {
        console.log("Logging data:");
        console.log(data);
        printData();
    }, [data])
    return (
        <div className="main">
            <table className="layout" width={"100%"}>
                <tr id="row1">
                    <td style={{ width: "50%" }}>
                        <div className="input">
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
                        <div id="content" className="content">

                        </div>
                    </td>
                </tr>
                <tr id="row2">
                    <td>
                        <div className="tools">
                            <label for="util-button-pannel">Util button panel</label><br /><br />
                            <ButtonPanel id="util-button-panel" buttons={buttons} />
                        </div>
                    </td>
                    <td>
                        TODO: add regex selection.
                    </td>
                </tr>
            </table>
        </div>
    )
}