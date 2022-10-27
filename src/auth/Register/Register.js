import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import './Register.css'
import toast from 'react-hot-toast';

const Register = () => {
  const { createUserRegister, setUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleAccepted = () => {
    setAccepted(!accepted)
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo_url.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password === confirm_password) {
      createUserRegister(email, password)
        .then(res => {
          const currentUser = res.user;
          setUser(currentUser)
          console.log(currentUser)
          toast.success('Welcome, our next learner!');
        }).catch(error => console.error(error));
    } else {
      toast.error('Confirm Password Not Matched!');
    }

  }

  return (
    <section className='register-section'>
      <h2 className='text-center mb-4'>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control className='rounded-0' name='name' type="text" placeholder="Enter full name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='rounded-0' name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhotoURL">
          <Form.Label>Photo URL (Optional)</Form.Label>
          <Form.Control className='rounded-0' name='photo_url' type="text" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='rounded-0' name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control className='rounded-0' name='confirm_password' type="password" placeholder="Confirm Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label="Accept my terms & condition" />
        </Form.Group>
        <Button className='w-100 rounded-0 mt-2' variant="primary" type="submit" disabled={!accepted}>
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