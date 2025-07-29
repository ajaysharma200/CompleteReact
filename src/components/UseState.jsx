import React, { useState } from "react";

const UseState = () => {

    const [counter, setCounter] = useState(0)

    // for string or product
    // const [product, setProduct] = useState('iphone')

    const [obj, setOjb] = useState({
        name: 'ajay',
        salary: 100000,
        age: 21
    })

    
  const increaseBy1 = () =>{
    // counter++;
    setCounter(counter+1)
    console.log("counter=", counter)
  }

    const decreaseBy1 = () =>{
    // counter--;
    setCounter(counter-1)
    console.log("counter=", counter)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{obj.name}</h1>
      <h2>{obj.salary}</h2>
      <button onClick={increaseBy1}>Increase</button>
      <button onClick={decreaseBy1}>Decrease</button>
    </div>
  )
}

export default UseState
