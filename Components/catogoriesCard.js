import { Image,  Text,TouchableOpacity,View } from "react-native";
import React, { useEffect } from "react";

const CategoriesCard= ({item}) =>{
   
    return(
        <TouchableOpacity style={{display:"flex",alignItems:"center"}}>
            <Image source={{uri:item.category_image}} style={{height:70,width:70, marginHorizontal:5}}/>
            <Text style={{position:"absolute",color:"white",bottom:0,fontWeight:"bold"}}>{item.category_title}</Text>
        </TouchableOpacity>
    );
}
export default CategoriesCard;