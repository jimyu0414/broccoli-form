import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import BrocoInviteForm from './BrocoInviteForm';

class BrocoModal extends React.Component{
  state={
    closeModal: true,
  }
  closeModal = () =>{
   this.setState(
      {showModal: false}
    )
  }
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
          <BrocoInviteForm closeModal={this.props.onHide}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
            
       );
    }
}

export default BrocoModal;