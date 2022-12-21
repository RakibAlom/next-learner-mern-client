import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import BlogCard from './BlogCard/BlogCard';
import BlogSidebar from './BlogSidebar/BlogSidebar';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/blog`)
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        setLoading(false)
      })
  }, [])
  return (
    <>
      <div className="row py-4">
        <div className="col-md-8 col-lg-9">
          {loading &&
            <div className='text-center py-4'>
              <Spinner animation="border" variant="primary" />
            </div>
          }
          <div className="row">
            {
              blogs.map(blog =>
                <div className="col-lg-6 mb-3" key={blog.id}>
                  <BlogCard blog={blog}></BlogCard>
                </div>
              )
            }

          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <BlogSidebar></BlogSidebar>
        </div>
      </div>
    </>
  );
};

export default Blogs;