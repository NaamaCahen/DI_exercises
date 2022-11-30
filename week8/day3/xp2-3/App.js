import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone'
import Color from './components/Color';
import Child from './components/Child';

const carinfo = {name: "Ford", model: "Mustang"};
function App() {
  return (
    <div className="App">
     <Car model={carinfo.model}/>
     <Events />
     <Phone />
     <Color />
     <Child />
    </div>
  );
}

export default App;
