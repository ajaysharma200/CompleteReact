import React from 'react'
//  work in console only do not update value in UI
const Counter = () => {

  let counter = 0;

  const increaseBy1 = () =>{
    counter++;
    console.log("counter=", counter)
  }

    const decreaseBy1 = () =>{
    counter--;
    console.log("counter=", counter)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseBy1}>Increase</button>
      <button onClick={decreaseBy1}>Decrease</button>
    </div>
  )
}

export default Counter
