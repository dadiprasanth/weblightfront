import React from 'react'
import Cardcontainer from './Cardcontainer'

export default function Card(props) {
    const{data,setCart,cart}=props
  return (
    <div class="product">
            <div class="imagecontainer">
                <div class="topicons">
                    <span>{data.rating.rate}/5</span>
                    <span>Avl {data.rating.count}</span>
                </div>
                <div class="image">
                    <img src={data.image}/>
                </div>

            </div>
            <div class="hover">
                <span>${data.price}</span>
                <i onClick={()=>setCart([...cart,data])} id="cart" className="fa fa-cart-plus" aria-hidden="true"></i>
                
                </div>
            <div class="productname">
                {data.title}
            </div>
          
            </div>
  )
}
