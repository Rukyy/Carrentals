import { useState } from 'react';
import { BrowserRouter as Router,Route,Switch,Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/cart';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';

function App() {

  const [state, setstate]=useState(0)
  return (
    <Router>
      <div className="App">
        <NavBar state={state}/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home setstate={setstate}/>
            </Route>
            <Route exact path='/'>
              <Cart prop={state}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
