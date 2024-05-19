import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainContext from './context/context'
import ROUTES from './routes/routes'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'


function App() {
const router=createBrowserRouter(ROUTES)
const [data,setData]=useState([])
useEffect(()=>{
  axios.get("http://localhost:5000/products").then(res=>{
    setData([...res.data])
    console.log(res.data)
  })
},[])
const contextData={
  data,setData
}

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}

export default App
