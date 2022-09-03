import { useSelector } from "react-redux";

const Basketicon =()=>{
        const items=useSelector(state=>state.basket.items);
    return(
        <>
        </>
    );
}
export default Basketicon;