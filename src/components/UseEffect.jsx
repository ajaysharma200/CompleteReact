import { useEffect, useState } from "react";
import React from "react";

const UseEffect = () => {
  const [counter, setcounter] = useState(10);
  useEffect(() => {
    document.title = counter;
    console.log("UseEffect is running....!");
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => setcounter(counter + 1)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
      <button
        onClick={() => setcounter(counter - 1)}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#17929bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default UseEffect;
