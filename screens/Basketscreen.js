import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import { basketItemTotal, removeFromBasket } from "../fetures/basketSlice";

const Basketscreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const total = useSelector(basketItemTotal);
  const restaurantname = useSelector(
    (state) => state.restaurant.restaurant.title
  );
  const [groupedItems, setGroupedItems] = useState([]);
  const groupdItems = () => {
    var temp = {};
    items.forEach((element) => {
      if (!temp[element.Dish_id]) {
        temp[element.Dish_id] = [];
      }
      temp[element.Dish_id].push(element);
    });
    //(temp[element.Dish_id] = temp[element.Dish_id] || []).push(element)

    setGroupedItems(temp);
  };

  useMemo(() => {
    groupdItems();
  }, [items]);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexGrow: 1, alignItems: "center", paddingVertical: 3 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Basket</Text>
          <Text style={{ color: "grey" }}>{restaurantname}</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <XCircleIcon
            size={50}
            style={{
              position: "absolute",
              right: 5,
              top: 2,
              color: "rgba(0,204,188,255)",
            }}
          />
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          backgroundColor: "white",
          padding: 15,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={{
            height: 30,
            width: 30,
            backgroundColor: "grey",
            borderRadius: 50,
          }}
        />
        <Text style={{ padding: 5, flexGrow: 1, textAlign: "center" }}>
          Delivery in 40-45 miutes
        </Text>
        <TouchableOpacity>
          <Text style={{ padding: 5, color: "rgba(0,204,188,255)" }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Object.entries(groupedItems).map(([key, item]) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}
            key={key}
          >
            <Text
              style={{ color: "rgba(0,204,188,255)", paddingHorizontal: 5 }}
            >{`${item.length} x`}</Text>
            <Image
              source={{ uri: item[0]?.Dish_image }}
              style={{ height: 40, width: 40, borderRadius: 50 }}
            />
            <Text style={{ flexGrow: 1, paddingHorizontal: 10, fontSize: 16 }}>
              {item[0].Dish_name}
            </Text>
            <Text style={{ paddingHorizontal: 5 }}>{`₹${item[0].Price}`}</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                dispatch(removeFromBasket(item[0]));
              }}
            >
              <Text
                style={{
                  color: "rgba(0,204,188,255)",
                  paddingHorizontal: 5,
                  fontSize: 13,
                }}
              >
                Remove
              </Text>
            </TouchableWithoutFeedback>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text style={{ flexGrow: 1, color: "grey" }}>Subtotal</Text>
          <Text style={{ color: "grey" }}>{`₹${total}`}</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text style={{ flexGrow: 1, color: "grey" }}>Delivery fee</Text>
          <Text style={{ color: "grey" }}>₹100</Text>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text style={{ flexGrow: 1 }}>Subtotal</Text>
          <Text>{`₹${total + 100}`}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,204,188,255)",
            borderRadius: 13,
            marginVertical: 12,
          }}
          onPress={() => {
            navigation.navigate("prepairingorder");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              padding: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Place order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Basketscreen;
