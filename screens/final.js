import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";
import MapView, { Marker } from "react-native-maps";

const Finalscreen = () => {
  const restaurant = useSelector((state) => {
    return state.restaurant.restaurant;
  });
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flexGrow: 1, backgroundColor: "rgba(0,204,188,255)" }}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 17,
              alignItems: "center",
              zIndex: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("home");
              }}
            >
              <XMarkIcon size={20} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
              Need help ?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              marginVertical: 20,
              marginHorizontal: 20,
              padding: 15,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ paddingLeft: 15, flexGrow: 1 }}>
              <Text style={{ color: "grey" }}>Estimated arrival</Text>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                45-50 Minutes
              </Text>
              <Progress.Bar
                size={40}
                indeterminate={true}
                style={{ marginVertical: 5, color: "rgba(0,204,188,255)" }}
                color="rgba(0,204,188,255)"
              />
              <Text>{`Your order at ${restaurant.title} is being prepared`}</Text>
            </View>
            <Animatable.Image
              source={{
                uri: "https://media.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif",
              }}
              style={{ height: 70, width: 70 }}
            />
          </View>
        </SafeAreaView>

        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          mapType="mutedStandard"
          style={{ flexGrow: 1, zIndex: -1, marginTop: -50 }}
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.short_description}
            description={restaurant.title}
            
          
            identifier="origin"
            pinColor="rgba(0,204,188,255)"
          />
        </MapView>
        <SafeAreaView style={{backgroundColor:"white"}}>
          <View style={{backgroundColor:"white",flexDirection:"row",paddingHorizontal:20,paddingTop:10,alignItems:"center"}}>
            <Image source={{
              uri:"https://links.papareact.com/wru"
            }}
            style={{width:40,height:40,borderRadius:50,padding:10}}/>
            <View style={{flexGrow:1,alignItems:"center",padding:10}}>
            <Text style={{fontSize:15}}>Abhishek</Text>
            <Text style={{color:"grey",fontSize:11}}>Your rider</Text>
            </View>
            <Text style={{color:"rgba(0,204,188,255)",fontSize:17,fontWeight:"bold"}}>Call</Text>
            </View>

        </SafeAreaView>
      </View>
    </>
  );
};

export default Finalscreen;
