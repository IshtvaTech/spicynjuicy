import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL with Fallback
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5100";
if (!import.meta.env.VITE_API_URL) {
  console.warn(
    "%c[WARNING] REACT_APP_API_URL is not set! Falling back to http://localhost:5100",
    "color: orange; font-weight: bold;"
  );
}

// Initial State
const initialState = {
  isLoading: false,
  reviews: [],
  error: null, // Add error handling
};

// Add Review
export const addReview = createAsyncThunk(
  "/reviews/addReview",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/shop/review/add`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding review:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to add review");
    }
  }
);

// Get Reviews
export const getReviews = createAsyncThunk(
  "/reviews/getReviews",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/shop/review/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching reviews:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to fetch reviews");
    }
  }
);

// Review Slice
const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    resetReviews: (state) => {
      state.reviews = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Reviews
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload?.data || [];
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.reviews = [];
        state.error = action.payload;
      })

      // Add Review
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload?.data);
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export Actions & Reducer
export const { resetReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
