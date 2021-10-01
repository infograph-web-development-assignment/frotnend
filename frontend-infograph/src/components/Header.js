import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolBar from "./ToolBar";
import NavBar from './NavBar';
export default function Header() {
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
