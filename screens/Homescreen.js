import { Text ,View ,StyleSheet, SafeAreaView ,Image,Platform,StatusBar}  from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const Homescreen=()=>{
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions(
            {headerShown:false}
        );
    },[])
    return (
      <SafeAreaView style={styles.droidsafearea}>
        <View style={styles.header}>
          {/* Header */}
            <View>
                <Image
                source={{
                    uri: "https://links.papareact.com/wru",
                }}
                style={styles.dp}
                />
            </View>
            <View>
                <Text >Deliver now !</Text>
                <Text>Current location</Text>
            </View>
        </View>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create ({
   droidsafearea: {
    paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0
   },
    dp: {
        height:30,
        width:30,
        padding:4,
        backgroundColor:"lightgrey",
        borderRadius:50
    },
    header:{
        flexDirection:"row",
    },
    deliverText:
    {
        fontSize:"small",
        fontWeight:"bold",
        color:"lightgrey"
    },
    currentLocationtext:{
        fontWeight:"bold",
        fontSize:"large"
    }


  })

export default Homescreen;