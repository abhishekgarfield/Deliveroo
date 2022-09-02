import { counter } from "@fortawesome/fontawesome-svg-core";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore(
    {
        reducer:counter
    }
)

const counter=(state=0,action)=>
{
 switch(action.type){
    case "Increment":
        return state+1
 }
};

