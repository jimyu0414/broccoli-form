import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import BrocoForm from './BrocoForm';

class BrocoModal extends React.Component{

    render(){
       return(
        <Modal
        className="broco-modal"
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Request an invite
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BrocoForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
            
       );
    }
}

export default BrocoModal;