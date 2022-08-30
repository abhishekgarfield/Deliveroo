const express = require("express");
const app = express();
const port = 8000;
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const uri = process.env.URI;

app.get("/restaurant", async (req, res) => {
  console.log("restaurants");
  const { featured_id } = req.query;
  const client = new mongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const restaurants = database.collection("restaurants");
    const data = await restaurants
      .find({ featured_rowId: featured_id })
      .sort({ featured_rowId: 1 })
      .toArray();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.get("/categories", async (req, res) => {
  console.log("in categories");
  const client = new mongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const categories = database.collection("categories");
    const Data = await categories.find().toArray();
    console.log(Data);
    if (Data.length < 1) {
      res.status(404).send("no data found");
    } else {
      res.send(Data);
    }
  } catch (err) {
    console.log(err);
  }
});
app.get("/featuredrow", async (req, res) => {
  console.log("in featured_rows");
  const client = new mongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const categories = database.collection("featuredrow");
    const Data = await categories.find().sort({ featured_id: 1 }).toArray();
    if (Data.length < 1) {
      res.status(404).send("no data found");
    } else {
      res.send(Data);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port);
