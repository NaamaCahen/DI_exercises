import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
 constructor(){
  super();
  this.state={
    languages : [
      {name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}
  ],
  yes:true
  }
 }
 style={
  backgroundColor:'beige',
  border:'2px solid black',
  height:'100px',
  margin:'10px'
 }
 addVote=(e)=>{
  const num=e.target.id;
  const numVotes=this.state.languages[e.target.id].votes++;
  this.setState({[this.state.languages[num].votes]:{numVotes}})
 }
  render(){
  return (
    <>
      <div style={this.style}>
        {this.state.languages[0].votes}  PHP <span id="0" style={{color:"green"}} onClick={this.addVote} >click here</span>
      </div>
      <div style={this.style}>
        {this.state.languages[1].votes}  Python <span id="1" style={{color:"green"}} onClick={this.addVote} >click here</span>
      </div>
      <div style={this.style}>
        {this.state.languages[2].votes}  JavaScript <span id="2" style={{color:"green"}} onClick={this.addVote} >click here</span>
      </div>
      <div style={this.style}>
        {this.state.languages[3].votes}  Java <span id={3}style={{color:"green"}} onClick={this.addVote} >click here</span>
      </div>
    </>
  )
}}

export default App;
