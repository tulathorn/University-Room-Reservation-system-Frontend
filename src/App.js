import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainView from "./Views/Main";
import LoginView from "./Views/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />{" "}
          <Route path="/login" component={LoginView} />{" "}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
