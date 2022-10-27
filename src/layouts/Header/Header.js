import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeControlContext';
import { FaMoon, FaSignOutAlt, FaSun, FaUserCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';
import logo from '../../assets/images/next-learner-logo.png';

const Header = () => {
  const { dark, changeDarkMood } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
      .then(res => {
        toast.success('Logout successfully done!');
      }).catch(error => console.error(error));
  }
  return (
    <>
      <Navbar className='shadow-sm' collapseOnSelect expand="lg" bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"}>
        <Container>
          <NavLink to="/" className="text-decoration-none">
            <Navbar.Brand>
              <img
                src={logo}
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /> <span className='fw-bold'>Next Learner</span>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-lg-center pt-4 pt-lg-0 fw-semibold">
              <NavLink className="nav-link" to="/courses">Courses</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" to="/faq">FAQ</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <Link className="nav-link" href="#" onClick={changeDarkMood}>
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
              {
                user && user.uid ?
                  <>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip id='tooltip-bottom2'>
                          {user?.displayName}
                        </Tooltip>
                      }
                    >
                      <span style={{ cursor: "pointer" }} className="nav-link" title={user.displayName}>
                        {user.photoURL ? <img style={{ height: "25px", width: "25px" }} className="rounded-circle" src={user.photoURL} alt={user.displayName} /> : <FaUserCircle title={user.displayName}></FaUserCircle>}
                      </span>
                    </OverlayTrigger>
                    <span style={{ cursor: "pointer" }} className="nav-link" onClick={handleSignOut}>
                      Logout <FaSignOutAlt></FaSignOutAlt>
                    </span>
                  </>
                  :

                  <>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-link" to="/register">
                      <Button className='btn-sm rounded-0 px-3' variant="primary">Join Free</Button>
                    </NavLink>
                  </>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;