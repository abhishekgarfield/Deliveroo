import { createSlice } from "@reduxjs/toolkit";

const initialState={
    restaurant:{}
};
export const  Restaurantslice= createSlice({
    name:"restaurant",
    initialState,
    reducers:{
        setRestaurant:(state,action)=>{
            state.restaurant=action.payload;
        }
    }
})

export const {setRestaurant}=Restaurantslice.actions;
export const selectRestaurant=(state)=>{
    return state.restaurant.restaurant};
export default Restaurantslice.reducer;