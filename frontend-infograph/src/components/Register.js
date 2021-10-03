import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userName: "",
      email: "",
      password: "",
    };
  }

  getName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  getUserName = (event) => {
    this.setState({ userName: event.target.value });
    console.log(this.state.userName);
  };

  getEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };

  getPassword = (event) => {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  };

  render() {
    return (
      <>
        <div>
          <h2>Register </h2>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='email'
              onChange={this.getName}
              placeholder='Enter your full name'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type='email'
              onChange={this.getUserName}
              placeholder='Enter your Username'
            />
          </Form.Group>

          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                onChange={this.getEmail}
                placeholder='Enter email'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                onChange={this.getPassword}
                placeholder='Password'
              />
            </Form.Group>

            <Button style={{padding:'30px'}} variant='primary' type='submit' >
              Create Account
            </Button>
            
            <Button  variant='secondary' type='submit' >
            Already Have an account?
          </Button>
          </Form>
        </div>
      </>
    );
  }
}
export default Register;
