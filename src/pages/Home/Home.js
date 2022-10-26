import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard/BlogCard';
import Course from '../Courses/Course/Course';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/courses`)
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <>
      <div className="row align-items-center flex-lg-row-reverse">
        <div className="col-md-12 col-lg-6">
          <div className='banner-image pb-2 p-lg-5'>
            <img className='img-fluid rounded-3' src="https://www.pngitem.com/pimgs/m/387-3877427_vector-marketing-training-seminar-internet-learning-hd-png.png" alt="Banner Thumbnail" />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className='banner-text'>
            <h1 className='mb-3'>Become a next tech rider</h1>
            <p className='my-3'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            <div className='banner-button'>
              <Link to="/register">
                <button className='btn btn-lg btn-primary rounded-0 fw-semibold px-lg-5'>Join Free</button>
              </Link>
              <Link to="/courses">
                <button className='btn btn-lg btn-outline-primary rounded-0 fw-semibold px-lg-5 ms-3'>See Our Courses</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className='latest-courses py-5'>
        <h1 className='text-center mb-5'>Latest Courses</h1>
        <div className="row">
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