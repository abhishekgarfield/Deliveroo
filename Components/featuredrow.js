import React, { useEffect, useState } from "react";
import { View ,Text ,Scrollview ,Image, StyleSheet, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./restaurantCards";
import axios from "axios";

const FeaturedRow=({title,description,id})=>{
  const [restaurants,setRestaurants]=useState([]);

  const getrestaurantData=async ()=>{
    console.log("making request");
         const response= await axios.get("http://localhost:8000/restaurant");
         setRestaurants(response.data);
  }
          useEffect(()=>{
            getrestaurantData();
        },[])
        
   
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" , margin:2}}>
          <Text style={{fontWeight:"bold",fontSize:17,marginHorizontal:5}}>{title}</Text>
          <ArrowRightIcon style={{ color: "green" , marginRight:5}} size={15} />
        </View>
        <Text style={styles.des}>{description}</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >

            {/* Restaurant cards */}
           {restaurants?.map((item ,index) =>
                <RestaurantCard restaurant={item} key={index} />
            )}
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