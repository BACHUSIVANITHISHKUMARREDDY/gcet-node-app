import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
const app= express()
app.listen(8080,() =>{
    mongoose.connect("mongodb://localhost:27017/gcet");
    console.log("Server Started");
});
const userSchema = mongoose.Schema({
    name: { type: String },
});
const user = mongoose.model("user", userSchema);

app.get("/register", async (req,res) =>{
    const result =await user.insertone({ name:"john"});
    return res.json(result);
});

app.get("/",(req,res) =>{
    return res.send("Hello World");
});
app.get("/greet",(req,res) =>{
    res.send("Greetings");
});
app.get("/name",(req,res) =>{
    return res.send("Nithish");
});
app.get("/weather",(req,res) =>{
    return res.send("36 degrees");
});
app.get("/products",(req,res) =>{
    const products =[
        {name:"product 1",price:20},
        {name:"product 2",price:30},
        {name:"product 3",price:50}  
    ];
    res.json(products);
});