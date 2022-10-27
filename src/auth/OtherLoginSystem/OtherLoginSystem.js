import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const OtherLoginSystem = () => {
  return (
    <div>
      <Row>
        <Col md="12" lg="6">
          <Button className='w-100 border fw-semibold rounded-0' variant="light" type="submit">
            <FaGoogle></FaGoogle> Connect with Google
          </Button>
        </Col>
        <Col md="12" lg="6" className='pt-3 pt-lg-0'>
          <Button className='w-100 border fw-semibold rounded-0' variant="dark" type="submit">
            <FaGithub></FaGithub> Connect with Github
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default OtherLoginSystem;