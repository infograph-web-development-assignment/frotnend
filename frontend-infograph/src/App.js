/** @format */

import React from "react";
import Register from "./components/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Authenticated from "./components/Authenticated";
import Startup from "./components/Startup";
import Status from "./components/Status";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import AuthenticatedAdmin from "./components/AuthenticatedAdmin";

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

            <Route exact path='/status'>
              <Status />
            </Route>

            <Route exact path='/admin'>
              <Admin />
            </Route>

            <Route exact path='/adminlogin'>
              <AdminLogin />
            </Route>

            <Route exact path='/adminregister'>
              <AdminRegister />
            </Route>

            <Route exact path='/isauthenticated'>
              <AuthenticatedAdmin />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
