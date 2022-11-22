import { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';

function App() {

  const [state, setstate]=useState(0)
  
  return (
    <div className="App">
      <NavBar state={state} />
      <Home setstate={setstate}/>
    </div>
  );
}

export default App;
