import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatePage = () => (
  <div>
    <h1>hello world</h1>
  </div>
);


function App() {
  return ( 
    <div >
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop/jackets' component={HatePage} />
      </Switch>
    </div>
  );
}

export default App;
