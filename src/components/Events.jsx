import React from 'react'

const Events = () => {

    const handleClick = () => {
        alert("you click the button")
    }

    const handleOpt = (e) => {
        alert(e + 10)
    }
  return (
    <div>
      <h1>We are learning events</h1>
      <button onClick={handleClick}>Click this button</button>
       <button onMouseOverCapture={() => handleOpt(10)}>Click this button  2</button>
    </div>
  )
}

export default Events
