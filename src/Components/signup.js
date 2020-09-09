import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
export default function Signup() {
    function onsubmit(){

    }
    return (
      <Container className="align-items-center d-flex" style={{height:'100vh'}}>
           <Form onSubmit={onsubmit}>
    <Form.Label>Wait List</Form.Label>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Name" required />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="email" placeholder="Email" required />
  </Form.Group>
  
  <Button variant="info" type="submit">
    Join Now    
  </Button>
  
</Form>
      </Container>
       
    )
}
