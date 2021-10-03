/** @format */

import React from "react";
import Register from "./components/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Register />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
