import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/pages/Login';
import Main from './components/pages/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login}/>
        <Route path="/family-tree" component={Main} />
        <Route path="/members" component={Main} />
        <Route path="/statistics" component={Main} />
      </Router>
    );
  }
}

export default App;

