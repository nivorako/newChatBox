import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: [],
    showMsg: false,
    selectedId: "",
};

export const messagesSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setShowMsg: (state, action) => {
            state.showMsg = action.payload;
        },
        setSelectedId: (state, action) => {
            state.selectedId = action.payload;
        },
        setMsg: (state, action) => {
            state.msg = [...state.msg, ...action.payload];
        },
        clearMsg: (state) => {
            state.msg = [];
            state.selectedId = "";
            state.showMsg = false;
        },
        resetMsg: (state) => {
            state.msg = [];
        }
    },
});

export const { setShowMsg, setSelectedId, setMsg, clearMsg, resetMsg } = messagesSlice.actions;

export default messagesSlice.reducer;
