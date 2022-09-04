import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {  SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress"
import { Image } from "react-native-animatable";

const Finalscreen = () => {
    const reataurantname=useSelector((state)=>{return state.restaurant.restaurant.title})
    const navigation=useNavigation();
  return (
    <>
      <View style={{flexGrow:1,backgroundColor:"rgba(0,204,188,255)"}}>
        <SafeAreaView>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:17,alignItems:"center"}}>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate("home")
                }}>
                    <XMarkIcon size={20} color="white"/>
                </TouchableOpacity>
                <Text style={{color:"white",fontSize:20,fontWeight:"400"}}>Need help ?</Text>
            </View>
            <View style={{flexDirection:"row",backgroundColor:"white",marginVertical:20,marginHorizontal:20,padding:15,borderRadius:5,justifyContent:"center",alignItems:"center"}}>
            <View style={{paddingLeft:15}}>
                <Text style={{color:"grey"}}>Estimated arrival</Text>
                <Text style={{fontWeight:"bold",fontSize:30}}>45-50 Minutes</Text>
                <Progress.Bar size={40} indeterminate={true} style={{marginVertical:5,color:"rgba(0,204,188,255)"}}  color="rgba(0,204,188,255)"/>
                <Text>{`Your order at ${reataurantname} is being prepared`}</Text>
            </View>
            <Image source={{uri:"https://media.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif"}} style={{height:70,width:70}}/>
            </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Finalscreen;
