import { createSlice } from "@reduxjs/toolkit";

const accessToken = localStorage.getItem("accessToken");

const initialState = {
   accessToken: accessToken || null,
  isAuthenticated: !!accessToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
       state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
       state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
