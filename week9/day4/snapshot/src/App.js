import Home from './components/Home';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import tachyons from 'tachyons';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home title='Mountains'/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
