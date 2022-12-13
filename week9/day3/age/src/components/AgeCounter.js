import React, { Component } from 'react';
import { connect } from 'react-redux';
import { minus,plus } from '../actions';

class AgeCounter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>            
            <button onClick={this.props.handlePlus}>Age Up</button>
            <span>my age:{this.props.age}</span>
            <button onClick={this.props.handleMinus}>Age Down</button>
            </>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        age:state.age
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handlePlus:()=>dispatch(plus()),
        handleMinus:()=>dispatch(minus())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AgeCounter) ;
