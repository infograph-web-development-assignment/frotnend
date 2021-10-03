/** @format */

import React from "react";
import Register from "./components/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Authenticated from './components/Authenticated'
import Startup from "./components/Startup";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>

            <Route exact path='/'>
              <Startup />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/register'>
            <Register />
          </Route>

          
          <Route exact path='/isauthenticated'>
          <Authenticated />
        </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
