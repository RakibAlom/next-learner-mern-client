import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OtherLoginSystem from '../OtherLoginSystem/OtherLoginSystem';
import './Login.css'
import toast from 'react-hot-toast';

const Login = () => {
  const { signInWithEmailPass, setLoading } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || '/';

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailPass(email, password)
      .then(res => {
        const user = res.user;
        form.reset();
        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success('Welcome, you login successfully!')
        }
        else {
          toast.error('Your email is not verified. Please verify your email address.')
        }

      }).catch(error => {
        console.error(error)
      }).finally(() => {
        setLoading(false);
      })

  }
  return (
    <section className='login-section'>
      <h2 className='text-center mb-4'>Login</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='rounded-0' name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='rounded-0' name="password" type="password" placeholder="Password" required />
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