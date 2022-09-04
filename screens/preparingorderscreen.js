import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";

import * as Animator from "react-native-animatable";

const Prepairingorderscreen = () => {
    const navigation=useNavigation();

    useEffect(()=>{
           setTimeout(()=>{
                navigation.navigate("final");
           },4000)
    },[])
  return (
    <SafeAreaView
      style={{
        backgroundColor: "rgba(0,204,188,255)",
        flexGrow: 1,
        justifyContent: "center",
      }}
    >
      <Animator.Image
        source={{
          uri: "https://media.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif",
        }}
        
        animation="fadeInUp"
        iterationCount={1}
        style={{height:400,width:400}}
      />
      <Animator.Text
        iterationCount={1}
        animation="fadeInUp"
        style={{
          color: "white",
          fontWeight: "900",
          fontSize: 18,
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Waiting for restaurant to accept your order!
      </Animator.Text>
      
      
    </SafeAreaView>
  );
};

export default Prepairingorderscreen;
