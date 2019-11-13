import React from 'react';
import { Form, Button } from 'react-bootstrap';

class BrocoForm extends React.Component{
    state={
        fields:{
            name:'',
            email:'',
            confirmEmail:''
        },
        fieldErrors: {},
    }

    onFormSubmit = (evt) =>{
         evt.preventDefault();
         const fields = this.state.fields;
         const fieldErrors = this.validate(fields);
         if (Object.keys(fieldErrors).length) return;
        
         let email = {
             name: fields.name,
             email: fields.email
        }

         const res =  fetch('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
            method: 'POST',
             headers: {
               'Accept': 'application/json',
              'Content-Type': 'application/json',
         }, 
            body: JSON.stringify(email)
        });
        
        // handle callback
          res.then(function(result) {
            if(result.status === 200){
                alert('Yes! you are now in our invite list.');
            }else{
                alert('Opps it returns 400 Bad request, mind to try again?');
            }
            
          },);

        this.props.closeModal()
    }

    validate = (fields) =>{
        let errors = {};
        let name = fields.name.trim();
        let email = fields.email;
        let confirmEmail = fields.confirmEmail;
        //console.log(name + email + confirmEmail)
        if(name.length < 3){
            errors.name = "Name should contain at least 3 characters";
        }
        if(email !== confirmEmail){
            errors.confirmEmail = "Confirmed Email does not match the email above";
        }
        this.setState({
            fieldErrors: errors
        })
        return errors;
    }

    onInputChange = (evt) =>{
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({ fields });
    }

    render(){
        return(
            <Form onSubmit={this.onFormSubmit}>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="name" 
                name="name"
                placeholder="Name" 
                value={this.state.fields.name}
                onChange={this.onInputChange}
                />
                <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                name="email"
                placeholder="Enter email" 
                value={this.state.fields.email}
                onChange={this.onInputChange}
                />
                <Form.Text className="text-muted">
                We'll send an invite to your email address.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Confirm Email address</Form.Label>
                <Form.Control 
                type="email" 
                name="confirmEmail"
                placeholder="Comfirm email address"
                value={this.state.fields.confirmEmail}
                onChange={this.onInputChange} 
                />
            </Form.Group>
            <span style={{ color: 'red' }}>{ this.state.fieldErrors.confirmEmail }</span>

            <Button className="button__modal-submit" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        );
    }
}

export default BrocoForm;