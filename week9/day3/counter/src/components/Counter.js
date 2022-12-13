import React, { Component } from 'react';
import { connect } from 'react-redux';
import { plus,minus } from '../redux/actions';


class Counter extends Component {
  constructor(){
    super()
  }
  incrementIfOdd=()=>{
    if(this.props.count%2!==0){
      this.props.handlePlus();
    }
    else{
      console.log('zougi!');
    }
  }
  increnentAsync=()=>{
    setTimeout(()=>{
      this.props.handlePlus();
    },1000)
  }
  render() {
    return (
     <>
     <button onClick={this.props.handlePlus}>+</button>
     <span>{this.props.count}</span>
     <button onClick={this.props.handleMinus}>-</button>
     <button onClick={this.incrementIfOdd}>increment if odd</button>
     <button onClick={this.increnentAsync}>increment async</button>
     </>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return{
    count:state.count
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    handlePlus:()=>dispatch(plus()),
    handleMinus:()=>dispatch(minus())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter) ;
