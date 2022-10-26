import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeControlContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { dark, changeDarkMood } = useContext(ThemeContext);
  return (
    <>
      <Navbar className='shadow-sm' collapseOnSelect expand="lg" bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
        <Container>
          <NavLink to="/" className="text-decoration-none">
            <Navbar.Brand>
              <img
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /> Next Learner
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-lg-center pt-4 pt-lg-0">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <Link className="nav-link" href="javascript:viod(0)" onClick={changeDarkMood}>
                {dark ?
                  <>
                    <FaSun></FaSun> Light
                  </>
                  :
                  <>
                    <FaMoon></FaMoon> Dark
                  </>
                }
              </Link>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavLink className="nav-link" to="/register">
                <Button className='btn-sm rounded-0' variant="primary">Join Free</Button>
              </NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;