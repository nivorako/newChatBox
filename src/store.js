import { configureStore  } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';
import drawerReducer from './features/drawerSlice';
import messagesReducer from "./features/messagesSlice";
import conversationsReducer from './features/conversationSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        drawer: drawerReducer,
        messages: messagesReducer,
        conversations: conversationsReducer
    }
})