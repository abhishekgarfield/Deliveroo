import { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";


const Dishcard=({dish})=>{
    return(
        <View style={{flexDirection:"row",paddingHorizontal:10,paddingTop:15,alignItems:"flex-start"}}>
            <View style={{width:2,flexGrow:1}}>
                <Text style={{fontWeight:"400",fontSize:20,padding:3}}>{dish.Dish_name}</Text>
                <Text style={{padding:3,color:"grey"}}>{dish.Dish_description}</Text>
                <Text style={{padding:3,color:"grey"}}>{`₹${dish.Price}`}</Text>
                <View style={{flexDirection:"row",padding:3}}>
                    <TouchableOpacity style={{backgroundColor:"rgb(126, 247, 222)",padding:10,borderRadius:50}}>
                        <PlusIcon size={15} style={{color:"white",fontWeight:"bold"}}/>
                    </TouchableOpacity>
                    <TextInput
                    style={{width:30,textAlign:"center"}}
                    placeholder="0"
                    editable={false}
                    />
                    <TouchableOpacity style={{backgroundColor:"rgb(126, 247, 222)",padding:10,borderRadius:50}}>
                        <MinusIcon size={15} style={{color:"white",fontWeight:"bold"}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image source={{uri:dish.Dish_image}} style={{width:70,height:70}}/>
            </View>
        </View>
    );
}

export default Dishcard;