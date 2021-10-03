import Main from "./Main";
import Header from "./Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorite from "./Favorite";
class Authenticated extends React.Component {
  render() {
    return (
      <>
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorites'>
              <Favorite />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default Authenticated;
