import React, { useState } from "react";
import { View ,Text ,Scrollview ,Image, StyleSheet, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./restaurantCards";

const FeaturedRow=({title,description,id})=>{
    const[restaurant,setRestaurant]=useState({
        id:1234,
        imgUrl:"https://links.papareact.com/gn7",
        title:"Yo! sushi",
        rating:4.5,
        genre:"japnese",
        address:"vill chhatru devi",
        short_description:"hi this is a restaurant",
        dishes:[],
        long:20,
        lat:0
    });
    return (
      <View style={{}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" , margin:2}}>
          <Text style={{fontWeight:"bold",fontSize:17,marginHorizontal:5}}>{title}</Text>
          <ArrowRightIcon style={{ color: "green" }} size={15} />
        </View>
        <Text style={styles.des}>{description}</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>

            {/* Restaurant cards */}
            <RestaurantCard restaurant={restaurant}/>
        </ScrollView>
      </View>
    );
}

const styles=StyleSheet.create({
    des:{
        color:"lightgrey",
        fontSize:11,
        margin:2,
        fontWeight:"bold",
        marginHorizontal:7
    }
})
export default FeaturedRow;