import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css'

const Login = () => {
  return (
    <section className='login-section'>
      <h2 className='text-center mb-4'>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="text-center my-3">
        <p className='py-3'>OR</p>
        <Row>
          <Col md="12" lg="6">
            <Button className='w-100 border fw-semibold' variant="light" type="submit">
              <FaGoogle></FaGoogle> Connect with Google
            </Button>
          </Col>
          <Col md="12" lg="6" className='pt-3 pt-lg-0'>
            <Button className='w-100 border fw-semibold' variant="dark" type="submit">
              <FaGithub></FaGithub> Connect with Github
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;