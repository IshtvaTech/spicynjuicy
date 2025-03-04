import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  isLoading: true,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5100/api/auth/register",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const loginUser = createAsyncThunk("/auth/login", async (formData) => {
  const response = await axios.post(
    "http://localhost:5100/api/auth/login",
    formData,
    {
      withCredentials: true,
    }
  );

  return response.data;
});

export const logoutUser = createAsyncThunk("/auth/logout", async () => {
  const response = await axios.post(
    "http://localhost:5100/api/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
});

export const checkAuth = createAsyncThunk("/auth/checkauth", async () => {
  const response = await axios.get(
    "http://localhost:5100/api/auth/check-auth",
    {
      withCredentials: true,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    }
  );

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
        if (action.payload.success) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
          localStorage.setItem("isAuthenticated", "true");
        }
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
        if (action.payload.success) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
          localStorage.setItem("isAuthenticated", "true");
        }
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
