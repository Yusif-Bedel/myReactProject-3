import axios from 'axios';
import { Formik } from 'formik';
import React, { useContext } from 'react'
import MainContext from '../../../context/context';
const Add = () => {
  const {data,setData}=useContext(MainContext)
  return (
    <div className='container' style={{padding:"100px 0px"}}>
      <Formik
       initialValues={{ image: '', title: '' ,price: ''}}
       
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:5000/products",{
                image:values.image,
                title:values.title,
                price:values.price
        }).then(res=>{
          setData([...data,res.data])
        })
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder='image link'
           />
           {errors.image && touched.image && errors.image}
           <input
             type="text"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
             placeholder='title'
           />
           {errors.title && touched.title && errors.title}
           <input
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
             placeholder='price'
           />
           {errors.price && touched.price && errors.price}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add
