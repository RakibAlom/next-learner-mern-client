import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import './Register.css'

const Register = () => {
  return (
    <section className='register-section'>
      <h2 className='text-center mb-4'>Register</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control className='rounded-0' type="text" placeholder="Enter full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='rounded-0' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='rounded-0' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control className='rounded-0' type="password" placeholder="Confirm Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className='w-100 rounded-0 mt-2' variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <div className="text-center my-3">
        <Link to="/login" className='py-4 d-block'>Already have an account?</Link>
        <p className='pb-3'>OR</p>
        <div className='other-login-system'>
          <OtherLoginSystem></OtherLoginSystem>
        </div>
      </div>
    </section>
  );
};

export default Register;