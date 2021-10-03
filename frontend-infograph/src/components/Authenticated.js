import Header from "./Header";
import React from "react";
import UserForm from "./UserForm";

class Authenticated extends React.Component {
  render() {
    return (
      <>
        <Header />
        <UserForm sendFund={this.props.sendFund} />
      </>
    );
  }
}
export default Authenticated;
