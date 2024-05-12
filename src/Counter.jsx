import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement =() =>{
        setCount(prevCount=>prevCount+1)
    }
    const handleDecrement =() =>{
        setCount(prevCount=>prevCount-1)
    }
  return (
    <>
    <h3>Counter App</h3>
    <p>Count:{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default Counter