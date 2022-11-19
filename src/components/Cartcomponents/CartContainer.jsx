import React from 'react'
import { useState } from 'react'
import Cartcard from './Cartcard'
import "./Cartcard.css"
export default function CartContainer(props) {
  const[grandtotal,setGrandTotal]=useState(0)
    const{data}=props
  return (
    <div class="CartContainer">
        {data.map(x=>{
            return(
                <Cartcard data={x} setGrandTotal={setGrandTotal}/>
            )
        })}
        <div className='grandtotal'>
          <span>Grandtotal</span>
          <span>{grandtotal}</span>
        </div>

    </div>
  )
}
