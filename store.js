
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./fetures/basketSlice";

export const store = configureStore(
    {
        reducer:{
            basket:basketReducer,
        }
    }
)

;
