import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NoMatch from './components/pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;


