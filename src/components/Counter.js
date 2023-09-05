import React,{useState} from 'react'
import "./index.css"

const Counter = () => {
    const [count, setCount]=useState(0);
    const inCrement=()=>{
        setCount(count+1)
    }
    const deCrement=()=>{
        setCount(count-1)
    }
  return (
    
        <div className='bg-container'>
            <h1>Counter Application </h1>
            <div>
        
                <h2 className={count >= 0 ? "green-text" : "red-text"}>{count}</h2>
            
            </div>
            <div>
                
            <button className='button1' onClick={deCrement}>-</button>
            <button className='button2' onClick={inCrement}>+</button>
            </div>
        </div>
    
  )
}

export default Counter