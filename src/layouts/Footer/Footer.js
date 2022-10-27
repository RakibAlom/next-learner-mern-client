import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeControlContext';
import logo from '../../assets/images/next-learner-logo.png';

const Footer = () => {
  const { dark } = useContext(ThemeContext)
  return (
    <>
      <footer className={`${dark ? "bg-dark text-light" : "bg-light"}`}>
        <div className="footer-top border-top border-bottom">
          <div className="container">
            <div className='d-flex justify-content-lg-between align-items-lg-center py-3 flex-column flex-lg-row'>
              <div className='footer-top-text'>
                <h4 className='m-0 fw-bold'>Teach the Next World</h4>
                <p className='m-0 fw-semibold text-secondary'>Create an online video course, reach students across the globe, and earn money</p>
              </div>
              <div className='footer-top-button my-3 my-lg-0'>
                <Link to="/courses">
                  <button className={` btn rounded-0 ${dark ? "btn-outline-light" : "btn-outline-dark"}`}>Get Course</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className='d-flex justify-content-between align-items-center py-4'>
              <div className='footer-image'>
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="Next-Learner"
                /> <span className='fw-bold'>Next-Learner</span>
              </div>
              <div>
                <p className='text-secondary fw-semibold m-0'>Copyright @2022</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;