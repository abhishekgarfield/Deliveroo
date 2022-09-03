
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./fetures/basketSlice";
import restaurantReducer from "./fetures/restaurantSlice";

export const store = configureStore(
    {
        reducer:{
            basket:basketReducer,
            restaurant:restaurantReducer
        }
    }
)

;
