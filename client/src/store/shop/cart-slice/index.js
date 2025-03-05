import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API Base URL (with a warning if missing)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5100";
if (!import.meta.env.VITE_API_URL) {
  console.warn(
    "%c[WARNING] REACT_APP_API_URL is not set! Falling back to http://localhost:5100",
    "color: orange; font-weight: bold;"
  );
}

// Initial State
const initialState = {
  cartItems: [],
  isLoading: false,
  error: null, // Track errors
};

// Reset Cart
export const resetCart = createAsyncThunk(
  "cart/resetCart",
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/api/shop/cart/reset/${userId}`);
      console.log(`Cart reset for user: ${userId}`);
      return [];
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to reset cart");
    }
  }
);

// Add to Cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/shop/cart/add`, {
        userId,
        productId,
        quantity,
      });
      console.log("Added to cart:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add to cart");
    }
  }
);

// Fetch Cart Items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/shop/cart/get/${userId}`
      );
      console.log("Fetched cart items:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch cart items"
      );
    }
  }
);

// Delete Cart Item
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/shop/cart/${userId}/${productId}`
      );
      console.log("Deleted cart item:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to delete cart item"
      );
    }
  }
);

// Update Cart Quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/api/shop/cart/update-cart`, {
        userId,
        productId,
        quantity,
      });
      console.log("Updated cart quantity:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to update cart quantity"
      );
    }
  }
);

// Shopping Cart Slice
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch Cart Items
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Cart Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Cart Item
      .addCase(deleteCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Reset Cart
      .addCase(resetCart.fulfilled, (state) => {
        state.cartItems = [];
        state.error = null;
      });
  },
});

export default shoppingCartSlice.reducer;
