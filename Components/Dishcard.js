import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addtoBasket, removeFromBasket } from "../fetures/basketSlice";


const Dishcard=({dish})=>{
    const[isPressed,setIspressed]=useState(false);
    const dispatch =useDispatch();
    const items=useSelector((state)=>state.basket.items)

    const additemtobasket=()=>{
      dispatch(addtoBasket(dish));
    }
    const removeitemfrombasket=()=>{
      dispatch(removeFromBasket(dish))
    }
    
    return (
      <TouchableWithoutFeedback
        onPress={(e) => {
          setIspressed(!isPressed);
        }}
      >
        <View
          style={isPressed ? styles.nobrdr : styles.brdr}
        >
          <View style={{ width: 2, flexGrow: 1 }}>
            <Text style={{ fontWeight: "400", fontSize: 20, padding: 3 }}>
              {dish.Dish_name}
            </Text>
            <Text style={{ padding: 3, color: "grey" }}>
              {dish.Dish_description}
            </Text>
            <Text
              style={{ padding: 3, color: "grey" ,marginBottom:5}}
            >{`₹${dish.Price}`}</Text>
            {isPressed && (
              <View style={{ flexDirection: "row", padding: 3 ,alignItems:"center"}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,204,188,255)",
                    padding: 10,
                    borderRadius: 50
                  }}
                  onPress={additemtobasket}
                >
                  <PlusIcon
                    size={15}
                    style={{ color: "white", fontWeight: "bold" }}
                    
                  />
                </TouchableOpacity>
                <Text style={{ paddingHorizontal:5}}>
                    {items.filter((item)=>{
                      
                        if(JSON.stringify(item)==JSON.stringify(dish))
                        {
                          return item;
                        }
                    }).length}
                  </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(0,204,188,255)",
                    padding: 10,
                    borderRadius: 50,
                  }}
                  onPress={removeitemfrombasket}
                >
                  <MinusIcon
                    size={15}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <Image
              source={{ uri: dish.Dish_image }}
              style={{ width: 70, height: 70 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles=StyleSheet.create({
    brdr:{
        flexDirection: "row",
            paddingHorizontal: 10,
            paddingTop: 15,
            borderBottomColor:"lightgrey",
            borderBottomWidth:2
    },
    nobrdr:{
        flexDirection: "row",
            paddingHorizontal: 10,
            paddingTop: 15,
            borderBottomColor:"lightgrey",
            borderBottomWidth:0
    }
})

export default Dishcard;