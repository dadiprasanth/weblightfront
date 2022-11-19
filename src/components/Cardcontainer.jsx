import React from 'react'
import { useState } from 'react'
import Card from './card'
export default function Cardcontainer(props) {
    const[query,setQuery]=useState("")
    const[price,setPrice]=useState(0)
    // const[finalData,setFinalData]=useState([])
    const{data}=props
    const serving=data.filter(x=>x.category.includes(query))
    const finalData=serving.filter(x=>x.price>=price)
  return (
    <>
    <div><select onChange={e=>setQuery(e.target.value)}>
        <option value="">ALL</option>
        <option>men's clothing</option>
        <option>electronics</option>
        <option>jewelery</option>
        <option>women's clothing</option>
        </select>
        </div>
    <div><div>price range{price}-1000</div>
        <input type="range" onChange={e=>setPrice(e.target.value*10)} />
    </div>
    <div className='container'>
        {finalData.map(x=>{
          return(<Card data={x}/>)
        })}
      </div>
      </>
  )
}
