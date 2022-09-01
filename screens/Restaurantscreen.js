import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { Image, StatusBar, Text, View,TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { ArrowLeftIcon, MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import Menucard from "../Components/menucard"

const Restaurantscreen=()=>{
    const navigation=useNavigation();
    const {
        params:{
            restaurant
        }
    }=useRoute();

    useLayoutEffect(()=>{
        
        navigation.setOptions({
            headerShown:false
        })
    },[])
    
    return(
        <ScrollView>
            <View>
                <Image source={{uri:restaurant.imgUrl}} style={{height:250,flexDirection:"column"}} />
                <TouchableOpacity style={{backgroundColor:"white",position:"absolute",top:45,marginLeft:10,borderRadius:50,padding:10}} onPress={()=>{
                    navigation.goBack();
                }}>
                <ArrowLeftIcon size={20} style={{color:"rgb(126, 247, 222)"}} />
                </TouchableOpacity>
            </View>
            <View style={{color:"grey",marginTop:5}}>
                <Text style={styles.txt}>{`${restaurant.title}`}</Text>
                <View style={{flexDirection:"row",paddingHorizontal:5,alignItems:"center",color:"grey",marginLeft:5,paddingVertical:1}}>
                    <StarIcon size={18}color="grey"/>
                    <Text style={{color:"grey"}}>{` ${restaurant.rating} `}</Text>
                    <MapPinIcon size={19} color="grey"/>
                    <Text style={{color:"grey"}}>{` nearby ${restaurant.address}`}</Text>
                </View>
                <View>
                    <Text style={{fontSize:15,paddingHorizontal:5,paddingVertical:1,color:"grey",marginLeft:5,marginBottom:3}}>
                        {
                            restaurant.short_description
                        }
                    </Text>
                </View>
                <View style={{marginTop:5,borderTopWidth:0.5,borderBottomWidth:0.5,borderStyle:""}}>
                    <Text style={{fontWeight:"bold",fontSize:16,marginVertical:15,marginLeft:10}}>
                        Have a food allergy ?
                    </Text>
                </View>
                <View style={{backgroundColor:"lightgrey"}}>
                    <Text style={{fontWeight:"bold",fontSize:20,marginVertical:15,marginLeft:10}}>
                        Menu
                    </Text>
                </View>
                <Menucard dishes={restaurant.dishes}/>
            </View>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
 txt:{
fontSize:25,
fontWeight:"bold",
paddingHorizontal:5,
paddingVertical:2,
marginLeft:5
 }
})

export default Restaurantscreen;