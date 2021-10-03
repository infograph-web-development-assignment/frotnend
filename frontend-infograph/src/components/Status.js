/** @format */

import axios from "axios";
import React, { Component } from "react";
import Header from "./Header";

import { Card } from "react-bootstrap";
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER,
      resultArr: [],
    };
  }

  componentDidMount = async () => {
    const apiResult = await axios.get(`${this.state.server}/getapResult`);
    this.setState({
      resultArr: apiResult.data,
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
        {this.state.resultArr.map(element=>{

           return <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Project name: {element.projectName}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Project status: {element.status}
                </Card.Subtitle>
                <Card.Text>
                Projetc sector: {element.sector}
              </Card.Text>
                <Card.Text>
                 Project Description: {element.description}
                </Card.Text>

              </Card.Body>
            </Card>
        })}
      </div>

      </>
    );
  }
}

export default Status;
