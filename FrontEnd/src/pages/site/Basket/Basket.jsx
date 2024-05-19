import React, { useEffect, useState } from 'react'
import './Basket.css'
import axios from 'axios'
const Basket = () => {
  const [data,setData]=useState([])
  const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
  },[basket])
  const addToBasket = (title) => {
    let basketItem = basket.find((e) => e.title == title);
    if (!basketItem) {
     

      setBasket([...basket,{ ...data,
                             count: 1,
                            totalPrice: data.price,
                           },
      ]);
    } else {
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    }
  };
  const deleteFromBasket = (id)=>{
    let salam=basket.find((e)=>e.id=id)
    if(salam){
      if(salam.count>1){
        salam.count--
        salam.totalPrice=salam.count*salam.price
        setBasket([...basket])
      }
      else{
        
        setBasket([...basket.filter((e)=>e.id!=id)])
      }
    }
  }
  return (
    <div style={{padding:"100px 0px"}}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Count</th>
            <th>Price</th>
            <th>TotalPrice</th>
            <th>Add</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
              basket.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td><img width={"60px"} src={item.image} alt="" /></td>
                  <td>{item.title}</td>
                  <td>{item.count}</td>
                  <td>{item.price}</td>
                  <td>{item.totalPrice}</td>
                  <td><button className='btn btn-warning' onClick={()=>{
                    addToBasket(item.title)
                  }}>Add</button></td>
                  <td><button className='btn btn-danger' onClick={()=>{
                    deleteFromBasket(item._id)
                  }}>Delete</button></td>
                </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Basket
