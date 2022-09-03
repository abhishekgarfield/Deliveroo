import { Text } from "react-native";
import { useSelector } from "react-redux";
import { basketItemTotal } from "../fetures/basketSlice";

const Basketicon =()=>{
        const items=useSelector(state=>state.basket.items);
        const Total=useSelector(basketItemTotal);
    return(
        <>
        <Text>{Total}</Text>
        <Text>hi pop up 
            nncnvbc
        </Text>
        </>
    );
}
export default Basketicon;