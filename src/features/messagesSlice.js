import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
   showMsg : null,
   selectedId: null
}

export const messagesSlice = createSlice({
    name:"message",
    initialState,
    reducers: {
        setShowMsg: (state, action) => {
            state.showMsg = action.payload;
        },
        setSelectedId: (state, action) => {
            state.selectedId = action.payload;
        }
    }
})
 
export const { setShowMsg, setSelectedId } = messagesSlice.actions;

export default messagesSlice.reducer;