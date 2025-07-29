import React from 'react'

const Ternary = ({name, age}) => {

    // const age = 20; 
  return (
   <>
    <div>
        <h1>Name = {name}</h1>
        <h1>{age > 10 ? "you can drive" : "you cannot drive"}</h1>
    </div>
   </>
  )
}

export default Ternary
