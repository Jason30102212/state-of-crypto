import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Navbar from './components/layout/Navbar';
import Content from './components/layout/Content';
import Prices from './components/prices/Prices';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="containers">
            <Route exact path="/content" component={Content} />
            <Route exact path="/prices" component={Prices} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
