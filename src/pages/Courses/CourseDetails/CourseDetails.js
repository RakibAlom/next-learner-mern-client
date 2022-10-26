import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';

const CourseDetails = () => {
  const course = useLoaderData()
  return (
    <div className="row py-4">
      <div className="col-md-8 col-lg-9">
        <div className='shadow p-3'>
          <h2>{course.name}</h2>
          <img className='img-fluid my-3 rounded-3' src={course.thumbnail_image} alt={course.name} />
          <div>
            <div dangerouslySetInnerHTML={{ __html: course.description }} />
          </div>
        </div>

      </div>
      <div className="col-md-4 col-lg-3">
        <CourseSidebar></CourseSidebar>
      </div>
    </div>
  );
};

export default CourseDetails;