import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class ApiData extends Component {
    render() {
        return (

            <div>
            
                <Card  key={this.props.idx} style={{ width: '16rem' }} >
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.level}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
        )
    }
}

export default ApiData
