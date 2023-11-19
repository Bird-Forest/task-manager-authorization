import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // ---------- REGISTER USER ----------------

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      // ---------- LOGIN USER ----------------

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })

      // ---------- REFRESH USER ----------------

      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })

      // ---------- LOGOUT USER ----------------

      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        // return initialState
      }),
});

export const authReducer = authSlice.reducer;

// extraReducers: {
//   [loginUp.fulfilled](state, action) {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
//   },
//   [logIn.fulfilled](state, action) {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
//   },
//   [logOut.fulfilled](state) {
//     state.user = { name: null, email: null };
//     state.token = null;
//     state.isLoggedIn = false;
//   },

//   [refreshUser.pending](state) {
//     state.isRefreshing = true;
//   },
//   [refreshUser.fulfilled](state, action) {
//     state.user = action.payload;
//     state.isLoggedIn = true;
//     state.isRefreshing = false;
//   },
//   [refreshUser.rejected](state) {
//     state.isRefreshing = false;
//   },
// },
