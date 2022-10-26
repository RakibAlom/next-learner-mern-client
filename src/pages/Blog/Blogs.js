import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';
import BlogSidebar from './BlogSidebar/BlogSidebar';

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <>
      <div className="row py-4">
        <div className="col-md-8 col-lg-9">
          <div className="row">
            {
              blogs.map(blog =>
                <div className="col-md-6 col-lg-4 mb-3" key={blog.id}>
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