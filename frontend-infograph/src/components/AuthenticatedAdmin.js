import axios from "axios";
import React, { Component } from "react";
import Header from "./Header";
import ForTheFormComp from "./ForTheFormComp";
import { Card, Button } from "react-bootstrap";

class AuthenticatedAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER,
      resultArr: [],
      formState: false,
    };
  }

  componentDidMount = async () => {
    const apiResult = await axios.get(`${this.state.server}/getapResult`);
    this.setState({
      resultArr: apiResult.data,
    });
  };

  showUpdateForm = (id) => {
    this.setState({
      id: id,
      formState: true,
    });
  };

  closeForm = () => {
    this.setState({
      formState: false,
    });
  };

  updateStatus = async (data) => {
    const updated = await axios.put(
      `${this.state.server}/updateStatus/${this.state.id}`,
      data
    );
    this.setState({
      resultArr: updated.data,
      formState: false,
    });
  };
  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>
          <h2>Data status</h2>
          {this.state.resultArr.map((element) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Project name: {element.projectName}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Project status: {element.status}
                  </Card.Subtitle>
                  <Card.Text>Projetc sector: {element.sector}</Card.Text>
                  <Card.Text>
                    Project Description: {element.description}
                  </Card.Text>
                  <Button
                    variant='primary'
                    onClick={() => this.showUpdateForm(element._id)}>
                    Change status
                  </Button>
                </Card.Body>
              </Card>
            );
          })}

          <div>
            {this.state.formState && (
              <ForTheFormComp
                updateStatus={this.updateStatus}
                closeForm={this.closeForm}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default AuthenticatedAdmin;
