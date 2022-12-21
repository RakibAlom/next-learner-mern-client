import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Course from './Course/Course';
import CourseSidebar from './CourseSidebar/CourseSidebar';

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/courses`)
      .then(res => res.json())
      .then(data => {
        setCourses(data)
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
              courses.map(course =>
                <div className="col-lg-6 col-xl-4 mb-3" key={course.id}>
                  <Course course={course}></Course>
                </div>
              )
            }

          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <CourseSidebar></CourseSidebar>
        </div>
      </div>
    </>
  );
};

export default Courses;