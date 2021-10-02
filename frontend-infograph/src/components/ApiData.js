import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
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

                        <Button variant="primary" onClick={()=>this.props.addToFav({name:this.props.name, level:this.props.level, img:this.props.img})}> Add Card To Favorites
                        </Button>

                        
                        
                    </Card.Body>

                </Card>
                </div>
        )
    }
}

export default ApiData
