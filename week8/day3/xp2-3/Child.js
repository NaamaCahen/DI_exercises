import React from "react";

class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    showFalse=()=>{
        this.setState({show:false});
        console.log(this.state.show);
        this.componentWillUnmount();
    }
    componentWillUnmount() {
        alert(`the component named header is about to be unmounted`);
    }

    render() {
        if (this.state.show===true) {
            return (
                <>
                    <h1>Hello World!</h1>
                    <button onClick={this.showFalse}>delete header</button>
                </>
            )
        }
    }
}
export default Child;