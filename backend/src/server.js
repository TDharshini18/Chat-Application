//const express=require('express');


import express from "express";
import dotenv from "dotenv";
import authRoutes from "./router/auth.route.js";    
import messageRoutes from "./router/message.route.js";
import connectDB from "./lib/db.js";
dotenv.config();
const app = express();

const PORT=process.env.PORT || 3000;

app.use(express.json()); //req body


//Basic SetUp but unmanagable when lots of routes
// app.get("/api/auth/signup",(req,res)=>{
//     res.send("Hello from signup API");})


// app.get("/api/auth/login",(req,res)=>{
//     res.send("Hello from login API");
// })

// app.get("/api/auth/logout",(req,res)=>{
//     res.send("Hello from logout API");
// })


app.use("/api/auth",authRoutes);
app.use ("/api/message",messageRoutes)

app.listen(PORT,()=> {
    connectDB();
    console.log("Server is running on port "+PORT)
});
