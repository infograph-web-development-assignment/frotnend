import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Admin login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' href='/admin'>
              Don't have an account?
            </Button>
            <Button variant='primary' onClick={this.props.loggingIn}>
              Login
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default AdminLogin;
