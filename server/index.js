const express=require("express");
const app=express();
const mongoClient=require("mongodb").MongoClient;
const cors=require("cors");
app.use(cors());
require("dotenv").config();
const uri=process.env.URI;



app.get("/restaurant",async(req,res)=>{
    const client=new mongoClient(uri);
    await client.connect();
    const database=client.db("app-data");
    const restaurants=database.collection("restaurants");
    const data=await restaurants.find().toArray();
    res.send(data);
    console.log("resquest recieved");
}).listen(8000);