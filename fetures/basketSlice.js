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
            
             
         }
    }
    }

);

// actions

export const {addtoBasket,removeFromBasket}=basketSlice.actions;
export const selectBasketItem =(state)=>state.basket.items;
export const basketItemTotal=(state)=>{
    var sum=0;
    state.basket.items.forEach((element) => {
      sum = sum + parseInt(element.Price);
    }
);return sum;};
export default basketSlice.reducer;

