import Header from "./Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserForm from './UserForm'

class Authenticated extends React.Component {
  render() {
    return (
      <>
        <Header />
        <UserForm
        sendFund={this.props.sendFund}
        />

      </>
    );
  }
}
export default Authenticated;
