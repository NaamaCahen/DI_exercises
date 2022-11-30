import React from 'react';

class BuggyCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    handleClick = (e) => {
        this.setState({ counter: (++this.state.counter) });
        console.log(this.state.counter);


    }
    render() {
        if (this.state.counter > 5) {
            throw Error('I crashed!');
        }
        return (
            <>
                <button onClick={this.handleClick}>click</button>
                <div>{this.state.counter}</div>
            </>
        )
    }
}
export default BuggyCounter;
