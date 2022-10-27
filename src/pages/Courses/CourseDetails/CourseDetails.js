import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import './CourseDetails.css';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseDetails = () => {
  const course = useLoaderData()
  return (
    <div className="row py-4">
      <div className="col-md-8 col-lg-9" style={{ position: "relative" }}>
        <Pdf targetRef={ref} filename={`${course.slug}.pdf`}>
          {({ toPdf }) => <button style={{ position: "absolute", top: "20px", right: "30px" }} onClick={toPdf} className='btn btn-light border border-2 rounded-0 ms-3 fw-semibold' title="Download PDF"><FaPrint></FaPrint></button>}
        </Pdf>
        <div className='shadow p-3 course-details' ref={ref}>

          <h2 className='pe-5'>{course.name}</h2>
          <img className='img-fluid my-3 rounded-3' src={course.thumbnail_image} alt={course.name} />
          <div className='d-flex justify-content-between align-items-lg-center flex-column flex-lg-row'>
            <div className='d-flex flex-column pb-2 pb-lg-0'>
              <span className='fw-bold'>{course.instructor}</span>
              <span className='text-secondary'><small>Date: {course.publish_date}</small></span>
              <span className='text-secondary fw-semibold'><small>{course.total_times}</small></span>
            </div>
            <div className='purchase-button'>
              <Link to={`/courses/check-out/${course.id}`}><button className='btn btn-success rounded-0 px-3 px-lg-5 fw-semibold' title="Get Premium Access">Purchase {course.purchase_price}</button>
              </Link>
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