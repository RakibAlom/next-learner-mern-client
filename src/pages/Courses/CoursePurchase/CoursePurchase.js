import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';

const CourseDetails = () => {
  const course = useLoaderData()
  return (
    <div className="row py-4">
      <div className="col-md-8 col-lg-9">
        <div className='shadow py-5 px-2 text-center'>
          <h1>Thanks For Purchase</h1>
          <h4>Purchase Amount: <span className='text-success fw-bold'>{course.purchase_price}</span></h4>
          <p className='pt-2'><span className='fw-semibold'>Course:</span> {course.name}</p>
          <div>
            <img className='w-50 my-3 rounded-3' src="https://i.ibb.co/pwxJLd8/thanks-for-purchasing.gif" alt="Purchase Success Alert" />
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