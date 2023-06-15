import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: "",
  showMsg: null,
  selectedId: null,
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
        state.msg = action.payload;
    }
  },
});

export const { setShowMsg, setSelectedId, setMsg } = messagesSlice.actions;

export default messagesSlice.reducer;
