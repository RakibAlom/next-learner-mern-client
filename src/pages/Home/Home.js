import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BlogCard from '../Blog/BlogCard/BlogCard';
import Course from '../Courses/Course/Course';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch(`https://next-learner-server.vercel.app/courses`)
      .then(res => res.json())
      .then(data => {
        setCourses(data)
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    setLoading(true)
    fetch(`https://next-learner-server.vercel.app/blog`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        setLoading(false)
      });
  }, []);

  return (
    <>
      <div className="row align-items-center flex-lg-row-reverse">
        <div className="col-md-12 col-lg-6">
          <div className='banner-image pb-2 p-lg-5'>
            <img className='img-fluid rounded-3' src="https://next-learner-app.web.app/images/banner/banner-image.png" alt="Banner Thumbnail" />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className='banner-text'>
            <h1 className='mb-3'>Become a next tech rider</h1>
            <p className='my-3'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <div className='banner-button'>
              {user && user.uid ? null : <Link to="/register">
                <button className='btn btn-lg btn-primary rounded-0 fw-semibold px-lg-5 me-3'>Join Free</button>
              </Link>}
              <Link to="/courses">
                <button className='btn btn-lg btn-outline-primary rounded-0 fw-semibold px-lg-5'>See Our Courses</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className='latest-courses py-5'>
        <h1 className='text-center mb-5'>Latest Courses</h1>
        <div className="row">
          {loading &&
            <div className='text-center py-4'>
              <Spinner animation="border" variant="primary" />
            </div>
          }
          {
            courses.sort((a, b) => b.id - a.id).slice(0, 3).map(course =>
              <div className="col-md-6 col-lg-4 mb-4" key={course.id}>
                <Course course={course}></Course>
              </div>
            )
          }
        </div>
        <div className='text-center mt-4'>
          <Link to='/courses'>
            <Button variant='outline-primary' className='btn btn-lg rounded-0 px-5'>View More</Button>
          </Link>
        </div>
      </section>

      <section className='latest-blogs py-5'>
        <h1 className='text-center mb-5'>Our Blog</h1>
        {loading &&
          <div className='text-center py-4'>
            <Spinner animation="border" variant="primary" />
          </div>
        }
        <div className="row">
          {
            blogs.sort((a, b) => b.id - a.id).slice(0, 3).map(blog =>
              <div className="col-md-6 col-lg-4 mb-4" key={blog.id}>
                <BlogCard blog={blog}></BlogCard>
              </div>
            )
          }
        </div>
        <div className='text-center mt-4'>
          <Link to='/blog'>
            <Button variant='outline-primary' className='btn btn-lg rounded-0 px-5'>View More</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;