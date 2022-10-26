import React from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeControlContext';

const Course = ({ course }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div>
      <Card className={`rounded-0 border-0 shadow ${dark ? "bg-dark" : "bg-light"}`}>
        <Card.Img className='rounded-0' variant="top" src={course.thumbnail_image} />
        <Card.Body>
          <Link to={`/courses/${course.slug}`}><Card.Title className={dark ? "text-light" : "text-dark"}>{course.name}</Card.Title></Link>
          <Card.Text className='text-secondary'>
            {course.short_details.slice(0, 65)}...
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-secondary fs-6 fw-semibold">
              <FaStar className='text-warning'></FaStar> {course.ratings.numbers} ({course.ratings.total_reviews})
            </div>
            <Link to={`/courses/${course.slug}`}><Button variant="primary" className='rounded-0'>See Details</Button></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;