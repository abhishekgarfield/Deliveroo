const express=require("express");
const mongoClient=require("mongodb").mongoClient;
const uri=""

const app=express();
app.get("/",(req,res)=>{
    res.send("hi");
}).listen(8000);