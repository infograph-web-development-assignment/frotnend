/** @format */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ToolBar from "./ToolBar";
class AdminRegisterForm extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <h2> Admin Register </h2>
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
              this.props.SaveAdmin({
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
            onClick={this.props.showLoginFunc}
            type='submit'>
            Already Have an account?
          </Button>
        </Form>
      </div>
    );
  }
}

export default AdminRegisterForm;
