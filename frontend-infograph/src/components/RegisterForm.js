import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";


class RegisterForm extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <div>
        <h2>Register </h2>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='email'
            onChange={this.props.getName}
            placeholder='Enter your full name'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type='email'
            onChange={this.props.getRegisterUsername}
            placeholder='Enter your Username'
          />
        </Form.Group>

        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              onChange={this.props.getEmail}
              placeholder='Enter email'
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

          <Button style={{ padding: "30px" }} onClick={this.props.showLoginFunc} variant='primary' type='submit'>
            Create Account
          </Button>

          <Button variant='secondary' onClick={this.props.showLoginFunc} type='submit'>
            Already Have an account?
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
