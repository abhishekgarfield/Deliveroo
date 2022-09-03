import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { basketItemTotal } from "../fetures/basketSlice";

const Basketicon =()=>{
        const items=useSelector(state=>state.basket.items);
        const Total=useSelector(basketItemTotal);
        console.log(Total);
    return (
      <>
        {items.length>0 &&<TouchableOpacity
          style={{
            backgroundColor: "rgb(126, 247, 222)",
            flexDirection: "row",
            position: "absolute",
            bottom: 30,
            padding: 15,
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

              backgroundColor: "green",
              padding:4
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
              fontWeight: "bold",
              padding:4
            }}
          >
            View Basket
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
              padding:4
            }}
          >
            {`₹ ${Total}`}
          </Text>
        </TouchableOpacity>}
      </>
    );
}
export default Basketicon;