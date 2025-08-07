import React from 'react'
import {useCon}
import MoneyContext from '../context/MoneyContext'

const Team = () => {
  const data = useContext(MoneyContext);
  return (
    <div>
      <h1>Team Component</h1>
      <p>Dollar: {data.dollar}</p>
      <p>Money: {data.money}</p>
      <p>Counter: {data.counter}</p>
      <button onClick={() => data.setCounter(data.counter + 1)}>Increment Counter</button>
    </div>
  )
}

export default Team
