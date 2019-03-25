import React, { Component } from "react";
import Navbar from "./components/layout/NavBar";
import signIn from "./components/layout/signIn";
import signUp from "./components/layout/signUp";
import HomePage from "./components/layout/HomePage";
import Modules from "./components/layout/Modules";
import Grades from "./components/layout/Grades";
import Deadlines from "./components/layout/Deadlines";
import Events from "./components/layout/Events";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">       
          <Navbar className="navbar-fixed-top"/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signIn" component={signIn} />
            <Route path="/signUp" component={signUp} />
            <Route path="/modules" component={Modules} />
            <Route path="/grades" component={Grades} />
            <Route path="/deadlines" component={Deadlines} />
            <Route path="/events" component={Events}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
