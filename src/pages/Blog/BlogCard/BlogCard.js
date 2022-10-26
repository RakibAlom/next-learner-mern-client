import React from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeControlContext';

const BlogCard = ({ blog }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div>
      <Card className={`rounded-0 border-0 shadow ${dark ? "bg-dark" : "bg-light"}`}>
        <Card.Img className='rounded-0' variant="top" src={blog.thumbnail_image} />
        <Card.Body>
          <Card.Title><Link className={`text-decoration-none ${dark ? "text-light" : "text-dark"}`} to={`/blog/${blog.slug}`}>{blog.title}</Link></Card.Title>
          <Card.Text className="text-secondary">
            {blog.short_details.slice(0, 120)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;