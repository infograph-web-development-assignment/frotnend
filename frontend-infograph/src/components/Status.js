import axios from "axios";
import React, { Component } from "react";
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
          <div className='row' className='align-items-stretch'>
            {this.state.resultArr.map((element) => {
              return (
                <div className='col' style={{ padding: "10px" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>
                        Project name: {element.projectName}
                      </Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        Project status: {element.status}
                      </Card.Subtitle>
                      <Card.Text>Projetc sector: {element.sector}</Card.Text>
                      <Card.Text>
                        Project Description: {element.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Status;
