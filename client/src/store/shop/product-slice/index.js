import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  productList: [],
  productDetails: null,
  error: null, // Add error state
};

// Fetch All Filtered Products
export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({ filterParams, sortParams }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        ...filterParams,
        sortBy: sortParams,
      });

      const response = await axios.get(
        `${API_URL}/api/shop/products/get?${query}`
      );

      console.log("Filtered Products Fetched:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error.response?.data);
      return rejectWithValue(
        error.response?.data || "Failed to fetch products"
      );
    }
  }
);

// Fetch Product Details
export const fetchProductDetails = createAsyncThunk(
  "/products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/shop/products/get/${id}`
      );

      console.log("Product Details Fetched:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error fetching product details:", error.response?.data);
      return rejectWithValue(
        error.response?.data || "Failed to fetch product details"
      );
    }
  }
);

// Shopping Product Slice
const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload || null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Products
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload?.data || [];
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
        state.error = action.payload;
      })

      // Fetch Product Details
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload?.data || null;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = null;
        state.error = action.payload;
      });
  },
});

export const { setProductDetails, resetError } = shoppingProductSlice.actions;
export default shoppingProductSlice.reducer;
