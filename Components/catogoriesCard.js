import { ScrollView, Text,View } from "react-native";
import React from "react";

const CategoriesCard= ({url,title}) =>{
    return(
        <ScrollView>
            <Text>{title}</Text>
        </ScrollView>
    );
}
export default CategoriesCard;