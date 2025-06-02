import express from 'express'
const app= express()
app.listen(8080,() =>{
    console.log("Server Started");
});
app.get("/",(req,res) =>{
    return res.send("Hello Nithish");
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