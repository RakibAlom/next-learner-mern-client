import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeControlContext';

const CourseSidebar = () => {
  const { dark } = useContext(ThemeContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [courses]);
  return (
    <div className='sticky-md-top'>
      <div className="list-group rounded-0">
        {
          courses.map(course =>
            <NavLink to={`/courses/${course.slug}`} className={`list-group-item list-group-item-action border-0 shadow mb-3`} aria-current="true" key={course.id}>
              {course.name}
            </NavLink>
          )
        }
      </div>
    </div>
  );
};

export default CourseSidebar;