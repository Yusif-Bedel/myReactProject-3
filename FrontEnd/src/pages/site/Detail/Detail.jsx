import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
import axios from 'axios'

const Detail = () => {
  const {id}=useParams();
  const [data,setData]=useState([])
  const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`).then(res=>{
        setData(res.data)
    })
  },[])
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
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",gap:"30px"}}>
      <img width={"300px"} src={data.image} alt="" />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"50px"}}>
        <h1 style={{fontSize:"60px",fontWeight:"bold"}}>{data.title}</h1>
        <p style={{fontSize:"30px",color:"gray"}}>{data.price} AZN</p>
        <button onClick={()=>{
          addToBasket(data.title)
        }} className='btn btn-primary'>Add to Basket</button>
      </div>
      <i style={{cursor:"pointer",fontSize:"50px"}} class="fa-regular fa-heart"></i>
    </div>
  )
}

export default Detail
