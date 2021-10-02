import React, { Component } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar collapseOnSelect expand='lg'>
            <Container>
              <div style={{ padding: "" }}>
                <Navbar.Text style={{ color: "white", padding: "10px" }}>
                  {" "}
                  <img
                    src='https://mail.google.com/mail/u/1?ui=2&ik=6488739f8a&attid=0.2&permmsgid=msg-f:1712335054757495286&th=17c36fa8f34501f6&view=att&disp=safe'
                    style={{ width: "200px", height: "200px" }}
                  />{" "}
                </Navbar.Text>

                
                
                <Navbar.Text style={{ marginLeft: "150px" }}>
                <select style={{ color: "#1DB9C3", border: "none" }}>
                <option value='Home'>Home</option>
                <option value='Second'>Second</option>
                </select>
                </Navbar.Text>
                
                <Navbar.Text style={{  }}>
                  <a href="/favorites"> <b>Favorites</b></a>
                </Navbar.Text>

                <Navbar.Text style={{ padding: "20px" }}>
                  <select style={{ border: "none" }}>
                    <option value='Blog'>Blog</option>
                    <option value='Second'>Second</option>
                  </select>
                </Navbar.Text>

                <Navbar.Text style={{ padding: "20px" }}>
                  <select style={{ border: "none" }}>
                    <option value='Portfolio'>Portfolio</option>
                    <option value='Second'>Second</option>
                  </select>
                </Navbar.Text>

                <Navbar.Text style={{ padding: "20px" }}>
                  <select style={{ border: "none" }}>
                    <option value='Pages'>Pages</option>
                    <option value='Second'>Second</option>
                  </select>
                </Navbar.Text>

                <Navbar.Text style={{ padding: "20px" }}>
                  <select style={{ border: "none" }}>
                    <option value='Features'>Features</option>
                    <option value='Second'>Second</option>
                  </select>
                </Navbar.Text>

                <Navbar.Text style={{ padding: "20px" }}>
                  <b>Contact</b>
                </Navbar.Text>

                <Navbar.Text>
                  {" "}
                  <img
                    src='https://icon-library.com/images/search-icon-images/search-icon-images-10.jpg'
                    style={{ width: "20px", height: "25px" }}
                  />{" "}
                </Navbar.Text>
              </div>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
export default NavBar;
