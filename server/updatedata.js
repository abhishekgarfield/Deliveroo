const express=require("express");
const app=express();
const mongoClient=require("mongodb").MongoClient;
const uri="mongodb+srv://Garfield:D9kkoY1eUNsfCuOL@cluster0.5p26dyi.mongodb.net/?retryWrites=true&w=majority"


app.get("/", async (req, res) => {
  const client = new mongoClient(uri);
  console.log("request made");
  try{
  await client.connect();
  const database = client.db("app-data");
  const response= await database.collection("restaurants").updateMany(
    { id: { $gt: 0 } },
    {
      $set: {
        dishes: [
          {
            Dish_id:1,
            Dish_name: "Chicken",
            Dish_description:
              "Chicken is made up with hen and oils used for cooking delicious reciepe",
            Price: "200",
            Dish_image: "https://i.imgur.com/hPWXl2E.jpg",
          },
          {
            Dish_id:2,
            Dish_name: "Chikan masla",
            Dish_description:
              "Chicken is made up with hen and oils used for cooking delicious reciepe",
            Price: "200",
            Dish_image: "https://i.imgur.com/Ln2LBmg.jpg",
          },
          {
            Dish_id:3,
            Dish_name: "Paneer masala",
            Dish_description:
              "Chicken is made up with hen and oils used for cooking delicious reciepe",
            Price: "200",
            Dish_image: "https://i.imgur.com/RjbqzOk.jpg[/img]",
          },
          {
            Dish_id:4,
            Dish_name: "Butter paneer",
            Dish_description:
              "Chicken is made up with hen and oils used for cooking delicious reciepe",
            Price: "200",
            Dish_image: "https://i.imgur.com/k0f4vjB.jpg[/img]",
          },
          {
            Dish_id:5,
            Dish_name: "Tikka",
            Dish_description:
              "Chicken is made up with hen and oils used for cooking delicious reciepe",
            Price: "200",
            Dish_image: "https://i.imgur.com/MtitkQu.jpg[/img]",
          },
        ]
      }
    }
  );
  console.log(response);
  res.send("done");
}catch(err)
{
    console.log(err);
}
});
app.listen(8080);