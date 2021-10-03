import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
export class ForTheFormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }
  statusState = (event) => {
    this.setState({ status: event.target.value });
  };
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input
              type='text'
              placeholder='status'
              onChange={this.statusState}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.closeForm}>
              Close
            </Button>
            <Button
              variant='primary'
              onClick={() =>
                this.props.updateStatus({ status: this.state.status })
              }>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default ForTheFormComp;
