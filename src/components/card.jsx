import React from 'react'

export default function Card(props) {
    const{data}=props
  return (
    <div class="product">
            <div class="imagecontainer">
                <div class="topicons">
                    <span>75%</span>
                    <i class="fa fa-eye"></i>
                </div>
                <div class="image">
                    <img src={data.image}/>
                </div>

            </div>
            <div class="productname">
                {data.title}
            </div>
            </div>
  )
}
