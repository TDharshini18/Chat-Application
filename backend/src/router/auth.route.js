import express from "express";
const router= express.Router();


router.get("/signup",(req,res)=>{
    res.send("Hello from signup API");})


router.get("/login",(req,res)=>{
    res.send("Hello from login API");
})

router.get("/logout",(req,res)=>{
    res.send("Hello from logout API");
})

export default router;