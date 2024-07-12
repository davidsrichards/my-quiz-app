import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    username: "",
  },
  reducers: {
    addUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { addUserName } = UserSlice.actions;

export default UserSlice.reducer;
