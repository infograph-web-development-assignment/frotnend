import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import StartupHeader from "./StartupHeader";
class Startup extends Component {
  render() {
    return (
      <div style={{}}>
        <>
        <StartupHeader/>

          <div style={{marginLeft:'40%', marginRight:'50%' , background:'', width:'400px', padding:'40px', color:'white' }} >
          
          <div style={{padding:'30px'}}>
          <button  style={{  padding:'40px', background:'#082032', color: "white", borderBlockColor:"black",fontFamily: "'Dancing Script', cursive",fontSize:"30px", width:'400px' }}  >
            <a style={{textDecoration:'none', color:'white'}} href="/register">Project owner account </a>
          </button>{" "}
          </div>
          <div style={{padding:'30px'}}>
          <button 
          style={{  padding:'40px', width:'400px' , background:'#082032', color: "white", borderBlockColor:"black",fontFamily: "'Dancing Script', cursive", fontSize:"30px" }}
          >
            <a style={{textDecoration:'none', color:'white'}} href="/admin">Admin account</a>
          </button>{" "}
          </div>
          
          </div>
        </>
      </div>
    );
  }
}

export default Startup;