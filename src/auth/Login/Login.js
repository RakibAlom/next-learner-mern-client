import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import './Login.css'

const Login = () => {
  const { setUser, signInWithEmailPass } = useContext(AuthContext)
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailPass(email, password)
      .then(res => {
        const currentUser = res.user;
        setUser(currentUser)
        console.log(currentUser)
      }).catch(error => console.error(error));

  }
  return (
    <section className='login-section'>
      <h2 className='text-center mb-4'>Login</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='rounded-0' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='rounded-0' type="password" placeholder="Password" />
        </Form.Group>
        <Button className='w-100 rounded-0 mt-2' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="text-center my-3">
        <div className='d-flex justify-content-between pb-4'>
          <Link to="#">Forget Password?</Link>
          <Link to="/register">Create an account?</Link>
        </div>
        <p className='pb-3'>OR</p>
        <div className='other-login-system'>
          <OtherLoginSystem></OtherLoginSystem>
        </div>
      </div>
    </section>
  );
};

export default Login;