import React from "react";

export class ButtonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: props.buttons
        }
    }

    render() {
        return (
            this.state.buttons.map(button => (
                <button key={button.key} onClick={button.function}>{button.label}</button>
            ))
        )
    }

}