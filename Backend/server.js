const express=require('express')
const mongoose=require("mongoose")
const cors=require("cors")
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())


const ProductSchema= new mongoose.Schema({
    image:{
        type : String
    },
    title:{
        type : String
    },
    price:{
        type : String
    }
})
const products = mongoose.model("Product",ProductSchema)
app.get("/products", async (req,res)=>{
    const response= await products.find()
    res.send(response)
})
app.get("/products/:id",async (req,res)=>{
    const {id} = req.params
    const target= await products.findById(id)
    res.send(target)
})
app.post("/products",async (req,res)=>{
    const {image,title,price}=req.body
    const newProduct=new products ({image:image,title:title,price:price})
    await newProduct.save()
    res.status(201).send("item created")
})
app.delete("/products/:id",async (req,res)=>{
    const {id}=req.params
    await products.findByIdAndDelete(id)
    res.send("item deleted")
})
app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    const { title, price, image } = req.body
    await products.findByIdAndUpdate(id, { ...req.body })
    res.send("item updated")
})
mongoose.connect(process.env.CONNECTION_STRING).then(res=>{
    console.log("db connected")
})
app.listen(process.env.PORT,(req,res)=>{
    console.log(`Porject running in ${process.env.PORT}`)
})