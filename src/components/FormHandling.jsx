// import React, { useState } from "react";

// const FormHandling = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       "your form has been submitted " + name + " " + email + " " + password
//     );

//     setName('');
//     setEmail('');
//     setPassword('')
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name :-{" "}
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//           />
//           <h4>{name}</h4>
//         </div>
//         <div>
//           Email :-{" "}
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//           />
//           <h4>{email}</h4>
//         </div>
//         <div>
//           Password :-{" "}
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//           />
//           <h4>{password}</h4>
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormHandling;


import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !password) {
      alert("Please fill all the fields before submitting the form.");
      return;
    }

    // If all fields are filled, submit the form
    alert(
      "Your form has been submitted:\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Password: " + password
    );

    // Reset form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form Handling with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
          <h4>{name}</h4>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <h4>{email}</h4>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
          <h4>{password}</h4>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormHandling;
