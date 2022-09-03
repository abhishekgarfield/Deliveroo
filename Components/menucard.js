import { View,Text,ScrollView } from "react-native";
import { useEffect } from "react";
import Dishcard from "./Dishcard";

 const Menucard=({dishes,title})=>{

    return(
        <ScrollView
        contentContainerStyle={{
            paddingBottom:120
        }}>
            {dishes.map((item,index)=><Dishcard dish={item} key={index} title={title}/>)}
        </ScrollView>
    );
}
export default Menucard;