import React, { use } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const Courses_Details = () => {
  // console.log(useLocation());
  // console.log(useParams());
  const { id } = useParams();
  const location = useLocation();

  const arr = [
    { id: "MERN001", name: "Mern_Stack", price: 10000 },
    { id: "JAVA002", name: "Java_Full_Stack", price: 15000 },
    { id: "REACT99", name: "React_Developer", price: 5000 },
  ];

  const course_detail = arr.filter((data) => data.id == id);
  console.log(course_detail);

  return (
    <>
      <div>
        <h1>Course Id = {id}</h1>
        <h2>Course Name = {course_detail[0].name}</h2>

        {location.pathname != "/courses/MERN001" && (
          <>
            <h2>Course Price = {course_detail[0].price}</h2>
            <h2>Course Duration = 6 Months</h2>
          </>
        )}
      </div>
      <Link
        to="/courses"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        All Courses
      </Link>
    </>
  );
};

export default Courses_Details;
