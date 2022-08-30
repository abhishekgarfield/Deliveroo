import { ScrollView, Text,View } from "react-native";
import React, { useEffect } from "react";
import CategoriesCard from "./catogoriesCard";

const Categories= ({item}) =>{
    
    
    return(
        
            <CategoriesCard item={item}/>
       
    );
}
export default Categories;
