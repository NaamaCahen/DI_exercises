import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      obj:[]
    }
  }
  async componentDidMount() {
    const data = await fetch(`http://localhost:4000/api/hello`);
    const obj = await data.json();
    console.log(obj);
    this.setState({obj:obj})
  }
  render() {
    return (
      <><h1>Hi!</h1>
        <>{this.state.obj}</>
      </>
    )
  }
}

export default App;

//for amichai: how to display on the page the h1 like an h1 and not like a text?