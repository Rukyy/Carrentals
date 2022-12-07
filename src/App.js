import { useState } from 'react';
import { BrowserRouter as Router,Route,Switch,Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/cart';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';
import CheckOut from './components/payment/checkout';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/checkout'>
              <CheckOut/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
