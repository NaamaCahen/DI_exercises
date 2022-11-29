import React from 'react';
import Garage from './Garage'
class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'grey'
        }
    }
    render() {
        return (
            <>
                <h1>
                    This car is {this.state.color} {this.props.model}
                </h1>
                <Garage size="small" />
            </>
        )
    }
}
export default Car;