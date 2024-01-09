import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
try {
    ReactDOM.render(
        <App />, document.getElementById("root")
    );
} catch (error) {
    console.log(error);
}