import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ToolBar extends Component {
  render() {
    return (
      <>
        <div style={{ background: "#082032" }}>
          <Navbar collapseOnSelect expand='lg'>
            <Container>
              <div style={{ padding: "20px" }}>
                <Navbar.Text style={{ color: "white", padding: "20px" }}>
                  {" "}
                  <img
                    src='https://www.pngkey.com/png/full/963-9630209_blue-location-icon-png.png'
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  2 Queen Street, USA
                </Navbar.Text>

                <Navbar.Text style={{ color: "white", padding: "20px" }}>
                  {" "}
                  <img
                    src='https://www.pngkey.com/png/full/105-1051476_call-us-black-phone-logo-transparent.png'
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  888 666 000
                </Navbar.Text>

                <Navbar.Text style={{ color: "white", padding: "20px" }}>
                  {" "}
                  <img
                    src='http://www.newdesignfile.com/postpic/2013/04/blue-email-envelope-icon_296775.png'
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
                  info@example.com
                </Navbar.Text>
              </div>
              <Navbar.Collapse style={{ padding: "20px" }}>
                <Nav className='me-auto'></Nav>
                <Nav style={{ marginTop: "30px" }}>
                  <a
                    href='https://www.goodreads.com/quotes'
                    style={{ color: "white", marginTop: -30 }}>
                    Get a Free Quote
                  </a>
                </Nav>
              </Navbar.Collapse>
              <img
                src='https://pngset.com/images/website-logo-background-clipart-background-website-logo-sphere-astronomy-outer-space-universe-transparent-png-1309368.png'
                style={{ width: "20px", height: "20px" }}
              />{" "}
              <select
                style={{
                  color: "white",
                  background: "#082032",
                  border: "none",
                }}>
                <option value='English'>English</option>
                <option value='Arabic'>Arabic</option>
                <option value='French'>French</option>
              </select>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
export default ToolBar;
