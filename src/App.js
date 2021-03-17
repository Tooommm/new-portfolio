import "./App.css";

import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/pages/NoMatch";
import Projects from "./components/pages/Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
