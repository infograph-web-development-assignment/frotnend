import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

class RegisterForm extends Component {
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Register as project owner</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.showLoginFunc}>
              Already have an account?{" "}
            </Button>
            <Button
              variant='primary'
              onClick={() => {
                this.props.SaveProjectOwner({
                  username: this.props.registerUsername,
                  password: this.props.registerPassword,
                });
              }}>
              Create Account
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default RegisterForm;
