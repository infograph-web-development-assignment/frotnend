import Main from "./components/Main";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorite from "./components/Favorite";
class App extends React.Component {
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
export default App;
