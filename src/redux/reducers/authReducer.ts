import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(logoutUser, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
