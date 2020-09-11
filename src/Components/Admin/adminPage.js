import React from 'react'
import {Form,Button,Container} from 'react-bootstrap'
export default function Admin() {
    return (
      <div className="container-xl">
           <Container className="align-items-center d-flex" style={{height:'100vh'}}>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Admin Username" />
          
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </div>
       
    )
}
