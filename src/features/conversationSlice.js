import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    id: null,
    title: "", 
    msglist: []
}

export const conversationSlice = createSlice({
    name:"conversation",
    initialState,
    reducers: {
        setId:(state, action ) => {
            state.id = action.payload;
        },
        setTitle:(state, action) => {
            state.title = action.payload;
        },
        setMsgList:(state, action) => {
            const newMessage = action.payload;
            state.msglist.push(newMessage);
        }
    }
})
 
export const { setId, setTitle, setMsgList } = conversationSlice.actions;

export default conversationSlice.reducer;