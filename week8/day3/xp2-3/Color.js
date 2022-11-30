import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: 'red',
            
        }
    }
    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' })
        }, 5000)
    }
    componentDidUpdate() {
        console.log();
        document.getElementById('favorite').textContent = `my favorite color is ${this.state.favoriteColor}`;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState.favoriteColor);
        document.getElementById('prev').textContent =`before the update the favorite was ${prevState.favoriteColor}. The updated favorite is ${this.state.favoriteColor}`
    }
    
    changeToBlue = () => {
        this.setState({ favoriteColor: 'blue' });
    }
    changeToPink = () => {
        this.setState({ favoriteColor: 'pink' });
    }

    render() {
        return (
            <>
                <h1>my favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeToBlue}>change to blue</button>
                <button onClick={this.changeToPink}>change to pink</button>
                <div id="favorite"></div>
                <div id="prev"></div>
            </>
        )
    }
}
export default Color;