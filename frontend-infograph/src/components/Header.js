import React, { Component } from "react";
import ToolBar from "./ToolBar";
import NavBar from "./NavBar";
class Header extends Component {
  render() {
    return (
      <>
        <div>
          <ToolBar />
        </div>

        <div>
          <NavBar />
        </div>
      </>
    );
  }
}
export default Header;
