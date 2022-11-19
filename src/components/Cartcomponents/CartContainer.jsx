import React from 'react'
import Cartcard from './Cartcard'
import "./Cartcard.css"
export default function CartContainer(props) {
    const{data}=props
  return (
    <div class="CartContainer">
        {data.map(x=>{
            return(
                <Cartcard data={x}/>
            )
        })}

    </div>
  )
}
