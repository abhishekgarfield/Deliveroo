import { Text ,View ,StyleSheet, SafeAreaView ,Image,Platform,StatusBar,TextInput, ScrollView}  from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    ChevronDownIcon, UserIcon ,SearchIcon,AdjustmentsHorizontalIcon, MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import Categories from "../Components/categories";



const Homescreen=()=>{
    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions(
            {headerShown:false}
        );
    },[])
    return (
      <SafeAreaView style={styles.droidsafearea}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    style={styles.dp}
                    />
                </View>
                <View style={{ paddingLeft: 5, flexGrow:1}}>
                    <Text style={styles.deliverText}>Deliver now !
                    </Text>
                    <Text style={styles.currentLocationtext}>
                        Current location
                        <ChevronDownIcon size={15} style={{color:"skyblue",paddingTop:10}}/>
                    </Text>
                </View>
                <UserIcon size={30} style={{color:"skyblue"}}/> 
            </View>
            {/* search box */}
            <View style={{flexDirection:"row",margin:3,paddingHorizontal:5}}>
                <View style={{flexDirection:"row",flexGrow:1 ,backgroundColor:"lightgrey" ,alignItems:"center"}}>
                    <MagnifyingGlassIcon size={15} style={{color:"skyblue",marginHorizontal:3}}/>
                    <TextInput placeholder="Restaurents and cousines"
                    keyboardType="default" />
                </View>
                <AdjustmentsHorizontalIcon size={20} style={{color:"skyblue",width:"inherit",marginLeft:2}}/>
            </View>
            {/* offers */}
            <ScrollView>
                {/* offers */}
                <Categories />
            </ScrollView>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create ({
   droidsafearea: {
    paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0,
    backgroundColor:"white"
   },
    dp: 
    {
        height:30,
        width:30,
        padding:4,
        backgroundColor:"lightgrey",
        borderRadius:50
    },
    header:
    {
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:5
    },
    deliverText:
    {
        fontSize:10,
        fontWeight:"bold",
        color:"lightgrey"
    },
    currentLocationtext:
    {
        fontWeight:"bold",
        fontSize:15,
        alignItems:"center"
    }


  })

export default Homescreen;