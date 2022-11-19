import React from 'react'
import { useState } from 'react'

export default function Cartcard(props) {
    const{data}=props
    const[price,setprice]=useState(1)
    const[count,setCount]=useState(1)
    const increaseCount=()=>{
        setCount(count+1)
    }
    const decreasecount=()=>{
        if(count>0){
            setCount(count-1)
        }
        
    }
  return (
    <div className='Cartcard'>
        <div className='CartImage'>
            <img src={data.image}/>
        </div>
        <div>
            {data.title}
        </div>
        <div className='Cartbuttons'>
            <button onClick={increaseCount}>+</button>
            <span>Q {count}</span>
            <button onClick={decreasecount}>-</button>
        </div>
        <div>
            {data.price*count}
        </div>
    </div>
  )
}
