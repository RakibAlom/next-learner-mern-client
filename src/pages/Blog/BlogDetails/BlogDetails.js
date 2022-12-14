import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import './BlogDetails.css'

const BloDetails = () => {
  const blog = useLoaderData()
  const state = useNavigation()
  return (
    <div className="row py-4">
      <div className="col-md-8 col-lg-9">
        {state === 'loading' &&
          <div className='text-center py-4'>
            <Spinner animation="border" variant="primary" />
          </div>
        }
        <div className='shadow p-3 blog-details'>
          <h2>{blog.title}</h2>
          <img className='img-fluid my-3 rounded-3' src={blog.thumbnail_image} alt={blog.title} />
          <div>
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </div>
        </div>

      </div>
      <div className="col-md-4 col-lg-3">
        <BlogSidebar></BlogSidebar>
      </div>
    </div>
  );
};

export default BloDetails;