import React from 'react'
import { useState } from 'react'

export default function Cartcard(props) {
    const{data,setGrandTotal}=props
    // const[price,setprice]=useState(0)
    const[count,setCount]=useState(0)
    const price=data.price*count
    const increaseCount=()=>{
        setCount(count+1)
       
       
        setGrandTotal(x=>x+price)
    }
    const decreasecount=()=>{
        if(count>0){
            setCount(count-1)
           
          
            
            setGrandTotal(x=>x-price)
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
            <button onClick={()=>increaseCount()}>+</button>
            <span>Q {count}</span>
            <button onClick={()=>decreasecount()}>-</button>
        </div>
        <div>
            {data.price}
        </div>
        <div>
            {price}
        </div>
    </div>
  )
}
