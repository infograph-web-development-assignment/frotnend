import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class FavoriteCards extends Component {
  render() {
    return (
      <div>
        <Card key={this.props.keys} style={{ width: "16rem" }}>
          <Card.Img variant='top' src={this.props.allData.img} />
          <Card.Body>
            <Card.Title>{this.props.allData.name}</Card.Title>
            <Card.Text>{this.props.allData.level}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FavoriteCards;
