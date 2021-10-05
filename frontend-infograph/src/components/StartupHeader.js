/** @format */

import React, { Component } from "react";
import ToolBar from "./ToolBar";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class StartupHeader extends Component {
  render() {
    return (
      <div>
        <ToolBar />

        <div>
       

          <Navbar collapseOnSelect expand='lg'>
            <Container>
              <div style={{ padding: "" }}>
                <Navbar.Text style={{  padding:'220px' }}>
                  {" "}
                  <img
                    src='https://mail.google.com/mail/u/1?ui=2&ik=6488739f8a&attid=0.2&permmsgid=msg-f:1712335054757495286&th=17c36fa8f34501f6&view=att&disp=safe'
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </Navbar.Text>


              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default StartupHeader;
