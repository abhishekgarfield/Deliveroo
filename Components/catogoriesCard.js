import { Image,  Text,TouchableOpacity,View } from "react-native";
import React from "react";

const CategoriesCard= ({url,title}) =>{
    return(
        <View>
        <TouchableOpacity>
            <Image source={{uri:url}} style={{height:70,width:70, marginHorizontal:5}}/>
        </TouchableOpacity>
        <Text style={{position:"absolute",bottom:0,color:"white"}}>{title}</Text>
        </View>
    );
}
export default CategoriesCard;