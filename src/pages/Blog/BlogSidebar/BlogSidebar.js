import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeControlContext';

const BlogSidebar = () => {
  const { dark } = useContext(ThemeContext);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/blog')
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