import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { XCircleIcon, XMarkIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import {selectRestaurant} from "../fetures/restaurantSlice"

const Finalscreen = () => {
    const reataurantname=useSelector((state)=>{return state.restaurant.restaurant.title})
  return (
    <>
      <View style={{flexGrow:1,backgroundColor:"rgba(0,204,188,255)"}}>
        <SafeAreaView>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,alignItems:"center"}}>
                <TouchableOpacity>
                    <XMarkIcon size={20} color="white"/>
                </TouchableOpacity>
                <Text style={{color:"white",fontSize:20,fontWeight:"400"}}>Need help ?</Text>
            </View>
            <View>
                <Text>Estimated arrival</Text>
                <Text>45-50 Minutes</Text>
                <Text>{`Your order at ${reataurantname} is being prepared`}</Text>
            </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Finalscreen;
