import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <h2> Admin Login </h2>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='email'
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

          <Button
            style={{ padding: "30px" }}
            onClick={this.props.loggingIn}
            variant='primary'
            type='submit'>
            Login
          </Button>

          <Button
            variant='secondary'
            href='/admin'
            type='submit'>
            Dont Have an account?
          </Button>
        </Form>
      </div>
    );
  }
}

export default AdminLogin;
