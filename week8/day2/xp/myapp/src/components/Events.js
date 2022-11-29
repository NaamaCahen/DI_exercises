import React from "react";

class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: true
        }
    }
    clickMe = () => {
        alert('I was clicked');
    }
    handleKeyPress = (event) => {
        if (event.code == 'Enter') {
            alert(`you pressed the enter key the input is: ${event.target.value}`)
        }
    }
    onClick = (e) => {
        const isToggle=this.state.isToggleOn;
        this.setState({ isToggleOn :(isToggle ? false : true)});
        e.target.textContent= isToggle? "ON" : "OFF";
        console.log(this.state.isToggleOn);
    }
    render() {
        return (
            <>
                <button onClick={this.clickMe}>click me!</button>
                <input type='text' onKeyPress={this.handleKeyPress} placeholder='press the ENTER key!' />
                <button onClick={this.onClick}>ON</button>
            </>
        )
    }
}
export default Events;