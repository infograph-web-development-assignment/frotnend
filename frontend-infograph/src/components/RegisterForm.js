/** @format */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Register </h2>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='text'
              onChange={this.props.getName}
              placeholder='Enter your Email'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type='text'
              onChange={this.props.getRegisterUsername}
              placeholder='Enter your Username'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              onChange={this.props.getRegisterPassword}
              placeholder='Password'
            />
          </Form.Group>

          <Button
            style={{ padding: "30px" }}
            onClick={() => {
              this.props.SaveProjectOwner({
                username: this.props.registerUsername,
                password: this.props.registerPassword,
              });
            }}
            variant='primary'
            type='submit'>
            Create Account
          </Button>

          <Button
            variant='secondary'
            // onClick={this.props.showLoginFunc}
            href="/login"
            type='submit'>
            Already Have an account?
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
//   <Form.Group className='mb-3' >
//     <Form.Label>Email addraasdess</Form.Label>
//     <Form.Control
//       type='email'
//       onChange={this.props.getEmail}
//       placeholder='Enter emaiaal'
//     />
//   </Form.Group>
