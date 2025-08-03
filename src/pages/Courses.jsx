// import React from 'react'

// const Prooduct = () => {

//     const arr = [
//         {
//             id: 1,
//             name: 'Mern Stack',
//             price: 10000
//         },
//         {
//             id: 2,
//             name: 'Java Full Stack',
//             price: 15000
//         },
//         {
//             id: 3,
//             name: 'React Developer',
//             price: 5000
//         },
        
//     ]
//   return (
//     <div>
//       <ul>
//         {arr.map((data)=> <div key={data.id}>
//             <li>{data.name}</li>
//         </div>)}
//       </ul>
//        {arr.map((data)=> <div key={data.id}>
//             <li>{data.price}</li>
//         </div>)}
//       </ul>
//     </div>
//   )
// }

// export default Prooduct



import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const arr = [
    { id: 'MERN001', name: 'Mern_Stack', price: 10000 },
    { id: 'JAVA002', name: 'Java_Full_Stack', price: 15000 },
    { id: 'REACT99', name: 'React_Developer', price: 5000 },
  ];

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {arr.map((data) => (
          <div key={data.id}>
            <li>
            <Link to={`/courses/${data.id}`}>{data.name}</Link>{" "}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Courses;

