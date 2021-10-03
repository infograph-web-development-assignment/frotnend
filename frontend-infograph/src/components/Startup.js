/** @format */

import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
class Startup extends Component {
  render() {
    return (
      <div>
        <>

          <Button variant='warning' href='/register'>Project owner account</Button>{" "}
          <Button variant='danger'>Admin account</Button>{" "}

        </>
      </div>
    );
  }
}

export default Startup;
