import React from 'react';
import { Form, Button } from 'react-bootstrap';

class BrocoForm extends React.Component{
    state={
        email:'',
        name:'',
        submit: false
    }
    render(){
        return(
            <Form>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll send an invite to your email address.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Confirm Email address</Form.Label>
                <Form.Control type="email" placeholder="Comfirm email address" />
            </Form.Group>

            <Button className="button__modal-submit" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        );
    }
}

export default BrocoForm;