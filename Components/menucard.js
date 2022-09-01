import { View,Text,ScrollView } from "react-native";
import { useEffect } from "react";
import Dishcard from "./Dishcard";

 const Menucard=({dishes})=>{

    return(
        <ScrollView>
            {dishes.map((item,index)=><Dishcard dish={item} key={index}/>)}
        </ScrollView>
    );
}
export default Menucard;