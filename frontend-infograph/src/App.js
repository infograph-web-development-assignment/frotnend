import Main from "./components/Main";
import Header from "./components/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
