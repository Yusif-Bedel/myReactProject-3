import React, { useEffect, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  return (
    <div className="s2card">
        <img width={"150px"} height={"150px"} src={item.image} alt="" />
        <h3>{item.title}</h3>
        <span>{item.price} AZN</span>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
            <Link to={`detail/${item._id}`} className='btn btn-primary' style={{fontSize:"14px"}}>Go to Details</Link>
        </div>
    </div>
  )
}

export default Card
