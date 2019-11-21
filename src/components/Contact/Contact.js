import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

import "./Contact.scss";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" placeholder="Enter your message here" />
          </Form.Group>

          <Button className="submit btn-black" type="submit">
            SUBMIT
          </Button>
        </Form>
      </div>
    );
  }
}
