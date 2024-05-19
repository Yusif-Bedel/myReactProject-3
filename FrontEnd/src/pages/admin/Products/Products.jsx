import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const Products = () => {
  const {data,setData}=useContext(MainContext)
  function deleteItem(id) {
    axios.delete(`http://localhost:5000/products/${id}`).then(res=>{
      const newData=data.filter((e)=>e.id!=id)
      setData([...newData])
    })

  }
  return (
    <div style={{padding:"100px 0px"}}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
              data.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td><img width={"60px"} src={item.image} alt="" /></td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><button className='btn btn-danger' onClick={()=>{
                    deleteItem(item._id)
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

export default Products
