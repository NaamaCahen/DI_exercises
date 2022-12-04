import React from "react";
import { connect} from "react-redux";
import { decrease, increase } from "../actions";

class Counter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
        <>
            <button onClick={this.props.increase}>+</button>
            <button onClick={this.props.decrease}>-</button>
            <p>the counter: {this.props.myCounter}</p>
        </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        myCounter:state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increase:()=>dispatch(increase()),
        decrease:()=>dispatch(decrease())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);