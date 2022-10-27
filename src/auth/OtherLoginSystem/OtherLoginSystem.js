import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const OtherLoginSystem = () => {
  const { user, signInWithProvider, setUser } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithProvider(googleProvider)
      .then(res => {
        const currentUser = res.user;
        setUser(currentUser)
        console.log(currentUser)
        toast.success('Welcome, you connected with Google!');
      }).catch(error => console.error(error));
  }
  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithProvider(githubProvider)
      .then(res => {
        const currentUser = res.user;
        setUser(currentUser)
        console.log(currentUser)
        toast.success('Welcome, you connected with Github!');
      }).catch(error => console.error(error));

  }
  return (
    <div>
      <Row>
        <Col md="12" lg="6">
          <Button onClick={handleGoogleSignIn} className='w-100 border fw-semibold rounded-0' variant="light" type="submit">
            <FaGoogle></FaGoogle> Connect with Google
          </Button>
        </Col>
        <Col md="12" lg="6" className='pt-3 pt-lg-0'>
          <Button onClick={handleGithubSignIn} className='w-100 border fw-semibold rounded-0' variant="dark" type="submit">
            <FaGithub></FaGithub> Connect with Github
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default OtherLoginSystem;