import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course/Course';
import CourseSidebar from './CourseSidebar/CourseSidebar';

const Courses = () => {
  const courses = useLoaderData();
  return (
    <>
      <div className="row py-4">
        <div className="col-md-8 col-lg-9">
          <div className="row">
            {
              courses.map(course =>
                <div className="col-md-6 col-lg-4 mb-3" key={course.id}>
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