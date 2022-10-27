import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import './CourseDetails.css';

const CourseDetails = () => {
  const course = useLoaderData()
  return (
    <div className="row py-4">
      <div className="col-md-8 col-lg-9">
        <div className='shadow p-3 course-details'>
          <h2>{course.name}</h2>
          <img className='img-fluid my-3 rounded-3' src={course.thumbnail_image} alt={course.name} />
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
              <span className='fw-bold'>{course.instructor}</span>
              <span className='text-secondary'><small>Date: {course.publish_date}</small></span>
              <span className='text-secondary fw-semibold'><small>{course.total_times}</small></span>
            </div>
            <div className='purchase-button'>
              <Link to={`/courses/check-out/${course.id}`}><button className='btn btn-success rounded-0 px-3 px-lg-5 fw-semibold'>Purchase {course.purchase_price}</button></Link>
            </div>
          </div>
          <hr />
          <div className='course-details pt-2'>
            <div dangerouslySetInnerHTML={{ __html: course.description }} />
          </div>
        </div>

      </div>
      <div className="col-md-4 col-lg-3">
        <CourseSidebar></CourseSidebar>
      </div>
    </div >
  );
};

export default CourseDetails;