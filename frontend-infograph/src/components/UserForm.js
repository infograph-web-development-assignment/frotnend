import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      description: "",
      sector: "Sector",
      server: process.env.REACT_APP_SERVER,
      status: "pending",
    };
  }

  getProjectName = (event) => {
    this.setState({
      projectName: event.target.value,
    });
  };

  getDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  getSector = (event) => {
    this.setState({
      sector: event.target.value,
    });
  };

  sendFund = async (data) => {
    const sendTheFund = await axios.post(
      `${this.state.server}/sendTheFund`,
      data
    );
  };

  render() {
    return (
      <div>
        <Form style={{ padding: "20px" }}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type='Text'
              onChange={this.getProjectName}
              placeholder='Enter project name'
            />
          </Form.Group>

          <select onChange={this.getSector}>
            <option value='Sector' selected>
              Sector
            </option>
            <option value='HealthCare'>Health Care</option>
            <option value='Financial'>Financial</option>
            <option value='Commuincations'>Commuincations</option>
          </select>

          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              onChange={this.getDescription}
              rows={3}
            />
          </Form.Group>

          <Button
            variant='primary'
            onClick={() => {
              this.sendFund({
                sector: this.state.sector,
                projectName: this.state.projectName,
                description: this.state.description,
                status: this.state.status,
              });
            }}>
            Send Funding request
          </Button>
        </Form>
      </div>
    );
  }
}

export default UserForm;
