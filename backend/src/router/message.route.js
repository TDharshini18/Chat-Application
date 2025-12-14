import express from "express";

const router =express.Router();



router.get("/send",(req,res)=>{
    res.send("Hello from send message API");
});

export  default router;