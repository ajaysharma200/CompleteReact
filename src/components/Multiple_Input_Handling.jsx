// import React from "react";
// import { useState } from "react";

// const Multiple_Input_Handling = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     age: "",
//     phone: "",
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;

//     setFormData({ ...formData, [name]: value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert("your form has been submitted");

//     console.log(formData);

//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       age: "",
//       phone: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <div>
//           Name:-{" "}
//           <input
//             value={formData.name}
//             name="name"
//             onChange={onChangeHandler}
//             type="text"
//           />
//         </div>
//         <div>
//           Email:-{" "}
//           <input
//             value={formData.email}
//             name="email"
//             onChange={onChangeHandler}
//             type="email"
//           />
//         </div>
//         <div>
//           Pass:-{" "}
//           <input
//             value={formData.password}
//             name="password"
//             onChange={onChangeHandler}
//             type="password"
//           />
//         </div>
//         <div>
//           Age:-{" "}
//           <input
//             value={formData.age}
//             name="age"
//             onChange={onChangeHandler}
//             type="number"
//           />
//         </div>
//         <div>
//           phone:-{" "}
//           <input
//             value={formData.phone}
//             name="phone"
//             onChange={onChangeHandler}
//             type="number"
//           />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Multiple_Input_Handling;


import React from "react";
import { useState } from "react";
import "../index.css"; // adjust path if needed

const Multiple_Input_Handling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const { name, email, password, age, phone } = formData;
    if (!name || !email || !password || !age || !phone) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    alert("Your form has been submitted successfully!");
    console.log(formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    });
  };

  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name:</label>
          <input
            value={formData.name}
            name="name"
            onChange={onChangeHandler}
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            value={formData.email}
            name="email"
            onChange={onChangeHandler}
            type="email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            value={formData.password}
            name="password"
            onChange={onChangeHandler}
            type="password"
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            value={formData.age}
            name="age"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            value={formData.phone}
            name="phone"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Multiple_Input_Handling;
