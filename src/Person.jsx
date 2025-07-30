import React from "react";

const Person = () => {
  const person = {
    name: "ajay",
    age: 18,
    gmail: "ajay@gmail.com",
  };
  const name = "arjun";
  const age = 20;

  return (
    <>
      <div>
        <h1>Name = {person.name}</h1>
        <h2>Age: {person.age}</h2>
        <h3>Gmail: {person.gmail}</h3>
        <h4>Jai Hind Jai Bharat</h4>
      </div>

      <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
    </>
  );
};

export default Person;
