import React from "react";

export const Sandbox = props => {
    const script = () => {
        console.log("Sandbox script")
    }

    return (
        <div className="sandbox">
            <script>{script()}</script>
        </div>
    )
}