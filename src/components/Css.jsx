import React from 'react'

const Css = ({brandname, model, price}) => {
  return (

    // inline styling
    <div style={{
        backgroundColor: "gray",
        padding: "5px",
        margin: "10px",
        borderRadius: "10px",
        border: "2px solid blue"
    }}>
      <h1>Brandname = {brandname}</h1>
      <h1>Name = {model}</h1>
      <h1>Price = {price}</h1>
    </div>
  )
}

export default Css;
