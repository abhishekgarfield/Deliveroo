import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { basketItemTotal } from "../fetures/basketSlice";

const Basketicon = () => {
  const items = useSelector((state) => state.basket.items);
  const Total = useSelector(basketItemTotal);
  return (
    <>
      {items.length > 0 && (
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,204,188,255)",
            flexDirection: "row",
            position: "absolute",
            bottom: 30,
            padding: 20,
            alignItems: "center",
            marginHorizontal: 11,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",

              backgroundColor: "rgba(0,150,150,255)",
              padding: 4,
              paddingHorizontal: 6,
            }}
          >
            {items.length}
          </Text>
          <Text
            style={{
              flexGrow: 1,
              alignItems: "center",
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "900",
              padding: 4,
            }}
          >
            View Basket
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "900",
              padding: 4,
            }}
          >
            {`₹${Total}`}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
export default Basketicon;
