import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BlogSidebar = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://next-learner-server.vercel.app/blog')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [blogs]);
  return (
    <div className='sticky-md-top'>
      <div className="list-group rounded-0">
        {
          blogs.map(blog =>
            <NavLink to={`/blog/${blog.slug}`} className={`list-group-item list-group-item-action border-0 shadow mb-3 py-3`} aria-current="true" key={blog.id}>
              {blog.title}
            </NavLink>
          )
        }
      </div>
    </div>
  );
};

export default BlogSidebar;