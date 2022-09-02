import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
};

//reducer
export const basketSlice=createSlice(
    {
    name:"basket",
    initialState,
    reducers:{
        addtoBasket:(state,action)=>{
            state.items=[...state.items,action.payload];

            console.log(state.items.map((item)=>item.Dish_name));
        },
        removeFromBasket:(state,action)=>{
           const index= state.items.findIndex((item)=>
             JSON.stringify(item)===JSON.stringify(action.payload)
            )
            const newBasket=[...state.items];
            console.log(index);
            if(index>=0){
            state.items.splice(index,1);
            }
            
            console.log(state.items.map((item)=>item.Dish_name));
             
         }
    }
    }

);

// actions

export const {addtoBasket,removeFromBasket}=basketSlice.actions;
export const selectBasketItem =(state)=>state.basket.items;
export default basketSlice.reducer;

