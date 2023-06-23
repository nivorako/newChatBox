import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msglist: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setMsgList: (state, action) => {
      state.msglist = [...state.msglist, ...action.payload];
    },
    clearMsgList: (state) => {
      state.msglist = [];
    }
  },
});

export const { setMsgList, clearMsgList } = conversationSlice.actions;

export default conversationSlice.reducer;
