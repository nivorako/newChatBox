import { configureStore  } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';
import drawerReducer from './features/drawerSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        drawer: drawerReducer
    }
})