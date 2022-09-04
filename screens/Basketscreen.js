import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const Basketscreen = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.basket.items);
  const restaurantname = useSelector(
    (state) => state.restaurant.restaurant.title
  );
  const [groupedItems, setGroupedItems] = useState([]);
  const groupdItems = () => {
    var temp = {};
    items.forEach((element) => {
      if(!temp[element.Dish_id])
      {
           temp[element.Dish_id]=[]
          }
          temp[element.Dish_id].push(element);
      
    });
    console.log(temp);
  };

  useMemo(() => {
    groupdItems();
  }, [items]);
  return (
    <>
      <Text>hi basket</Text>
    </>
  );
};

export default Basketscreen;
