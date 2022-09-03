import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LocationMarkerIcon, MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
const RestaurantCard=({restaurant})=>{
  const navigation=useNavigation();

    return (
      <TouchableOpacity
      onPress={(e)=>{
      navigation.navigate("restaurant",{
        restaurant:restaurant
      });
      }}
        style={{
          width: 285,
          height: 260,
          backgroundColor: "white",
          shadowColor: "black",
          shadowOpacity: 0.4,
          shadowOffset: { height: 0, width: 0 },
          shadowRadius: 6,
          marginVertical: 10,
          marginHorizontal: 7,
          elevation: 4,
        }}
      >
        <View>
          <View>
            <Image
              source={{ uri: restaurant.imgUrl }}
              style={{ height: 180, width: 285 }}
            />
          </View>
          <View style={{ padding: 5 }}>
            <View style={{ marginVertical: 2 }}>
              <Text style={styles.name}>{restaurant.title}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 2,
              }}
            >
              <StarIcon size={15} style={{ color: "green" }} />
              <Text style={{ color: "green" }}> {restaurant.rating} </Text>
              <Text style={{ color: "grey" }}>{restaurant.genre} </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 2,
              }}
            >
              <MapPinIcon size={18} style={{ color: "grey" }} />
              <Text style={{ color: "grey" }}>
                {" "}
                {`Nearby ${restaurant.address}`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    name:{
        fontWeight:"bold",
        fontSize:16
    }
})

export default RestaurantCard;