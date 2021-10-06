import React, { Component } from "react";
import { Navbar, Container,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  
  clicker = ()=>{
    console.log('licker clicker')
  }
  
  render() {
    return (
      <>
      <div style={{background:'white'}}>
        
          <Navbar   collapseOnSelect expand='lg'>
            <Container  >
              <div >
                <Navbar.Text style={{ color: "white"}}>
                  {" "}
                  <img
                    src='https://mail.google.com/mail/u/1?ui=2&ik=6488739f8a&attid=0.2&permmsgid=msg-f:1712335054757495286&th=17c36fa8f34501f6&view=att&disp=safe' alt=''
                    style={{ width: "150px", height: "120px" }}
                  />{" "}
                </Navbar.Text>

                <Navbar.Text style={{ marginLeft:'150px' , padding:'30px' }} >
                  
                    {" "}
                    <button style={{  background:"transparent", color: "black", borderBlockColor:"black",fontFamily: "'Dancing Script', cursive",fontSize:"15px", border:'none'}} onClick={this.props.forHome} ><b>Home</b> </button>
                  
                </Navbar.Text>

                <Navbar.Text style={{ padding: "10px" }}>

                    {" "}
                   <button style={{  background:"transparent", color: "black", borderBlockColor:"black",fontFamily: "'Dancing Script', cursive",fontSize:"15px", border:'none'}} onClick={this.props.forStatus}> <b>Status</b> </button>

                </Navbar.Text>

                <Navbar.Text style={{ padding: "10px" }}>
                  <select style={{ border: "none" }}>
                    <option value='Blog'>Blog</option>
                    <option value='Second'>Second</option>
                  </select>
                </Navbar.Text>



                <Navbar.Text style={{ padding: "10px" }}>
                  <select style={{ border: "none" }}>
                    <option value='Pages'>Pages</option>
                    <option value='Second'>Second</option>
                  </select>
                </Navbar.Text>


                <Navbar.Text style={{ padding: "10px" }}>
                  <b>Contact</b>
                </Navbar.Text>

                <Navbar.Text>
                  {" "}
                  <img
                    src='https://icon-library.com/images/search-icon-images/search-icon-images-10.jpg' alt=''
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
