/** @format */

// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";

// class Login extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Login </h2>

//         <Form.Group className='mb-3' controlId='formBasicEmail'>
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type='text'
//             onChange={this.props.getLoginUsername}
//             placeholder='Enter your Username'
//           />
//         </Form.Group>

//         <Form>
//           <Form.Group className='mb-3' controlId='formBasicPassword'>
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type='password'
//               onChange={this.props.getLoginPassword}
//               placeholder='Password'
//             />
//           </Form.Group>

//           <Button
//             style={{ padding: "30px" }}
//             onClick={this.props.loggingIn}
//             // href="/isauthenticated"
//             variant='primary'
//             type='submit'>
//             Login
//           </Button>

//           <Button
//             variant='secondary'
//             // onClick={this.props.showRegisterFunc}
//             href='/register'
//             type='submit'>
//             Dont Have an account?
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default Login;

import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div >

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title >Log in your account</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                onChange={this.props.getLoginUsername}
                placeholder='Enter your Username'
              />
            </Form.Group>

            <Form>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  onChange={this.props.getLoginPassword}
                  placeholder='Password'
                />
              </Form.Group>


            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' href='/register'>Don't have an account?</Button>
            <Button variant='primary' onClick={this.props.loggingIn}>Login</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default Login;
