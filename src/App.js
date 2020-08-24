import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Siddhant from './components/1/sidhant';
import Home from './components/Home/Home';
import Bhuswarna1 from './components/Bhuswarna/Bhuswarna1';
import Bhuswarna2 from './components/Bhuswarna/Bhuswarna2';
import Shuvangi1 from './components/Shuvangi/patientFamily';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/siddhant' component={Siddhant} />
        <Route exact path='/bhuswarna1' component={Bhuswarna1} />
        <Route exact path='/bhuswarna2' component={Bhuswarna2} />
        <Route exact path='/shuvangi1' component={Shuvangi1} />
      </Switch>
    </Router>
  );
}

export default App;
