import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
class FavoriteCards extends Component {

  constructor(props){
    super(props);
    this.state={
      server: process.env.REACT_APP_SERVER
    }
  }


  deleteFromFavs = async (id)=>{
    const deleted = await axios.delete(`${this.state.server}/deleteFromFavs/${id}`);

    this.setState({
      favoritedData: deleted.data
    })
  }


  
  render() {
    return (
      <div>
        <Card key={this.props.keys} style={{ width: "16rem" }}>
          <Card.Img variant='top' src={this.props.allData.img} />
          <Card.Body>
            <Card.Title>{this.props.allData.name}</Card.Title>
            <Card.Text>{this.props.allData.level}</Card.Text>
            <Button variant="primary" onClick={()=> this.deleteFromFavs(this.props.keys)}> Delete </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FavoriteCards;
