import { createSlice } from "@reduxjs/toolkit";

const initialState  = {  
    msglist: [],
}

export const conversationSlice = createSlice({
    name:"conversation",
    initialState,
    reducers: {
        setMsgList:(state, action) => {
            const newMessage = action.payload;
            state.msglist.push(newMessage);
        }
    }
})
 
export const { setMsgList } = conversationSlice.actions;

export default conversationSlice.reducer;