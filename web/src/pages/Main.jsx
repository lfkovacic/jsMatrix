import React, { useState, useEffect } from "react";
import { getValue, setContent } from "../scripts/util";
import { DataTool } from "../tools/DataTool";
import "./styles.css"
export const Main = props => {

    const [data, setData] = useState([]);

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
        setData(data.sort());
    }

    const printData = () => {
        setContent("content", formatData(data));
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
            </table>
        </div>
    )
}