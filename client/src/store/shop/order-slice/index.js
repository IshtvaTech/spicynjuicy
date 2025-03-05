import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL with fallback
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5100";
if (!import.meta.env.VITE_API_URL) {
  console.warn(
    "%c[WARNING] REACT_APP_API_URL is not set! Falling back to http://localhost:5100",
    "color: orange; font-weight: bold;"
  );
}

// Initial State
const initialState = {
  checkoutURL: null,
  isLoading: false,
  orderId: null,
  orderList: [],
  orderDetails: null,
  error: null, // New error state
};

// Create New Order
export const createNewOrder = createAsyncThunk(
  "/order/createNewOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/shop/order/create`,
        orderData
      );
      console.log("Order Created:", response.data);
      return response.data;
    } catch (error) {
      // Log the entire error response for debugging
      console.error(
        "Order Creation Error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || "Failed to create order");
    }
  }
);

// Capture Payment
export const capturePayment = createAsyncThunk(
  "/order/capturePayment",
  async ({ paymentId, orderId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/shop/order/capture`, {
        paymentId,
        orderId,
      });
      console.log("Payment Captured:", response.data);
      return response.data;
    } catch (error) {
      console.error("Payment Capture Error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Payment capture failed");
    }
  }
);

// Get All Orders for User
export const getAllOrdersByUserId = createAsyncThunk(
  "/order/getAllOrdersByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/shop/order/list/${userId}`
      );
      console.log("Orders Fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("Fetch Orders Error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to fetch orders");
    }
  }
);

// Get Order Details
export const getOrderDetails = createAsyncThunk(
  "/order/getOrderDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/shop/order/details/${id}`
      );
      console.log("Order Details Fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("Fetch Order Details Error:", error.response?.data);
      return rejectWithValue(
        error.response?.data || "Failed to fetch order details"
      );
    }
  }
);

// Shopping Order Slice
const shoppingOrderSlice = createSlice({
  name: "shoppingOrderSlice",
  initialState,
  reducers: {
    resetOrderDetails: (state) => {
      state.orderDetails = null;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create New Order
      .addCase(createNewOrder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkoutURL = action.payload?.checkoutURL || null;
        state.orderId = action.payload?.orderId || null;

        if (state.checkoutURL) {
          sessionStorage.setItem("checkoutURL", state.checkoutURL);
        }
      })
      .addCase(createNewOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.checkoutURL = null;
        state.orderId = null;
        state.error = action.payload;
      })

      // Get All Orders
      .addCase(getAllOrdersByUserId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllOrdersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderList = action.payload?.data || [];
      })
      .addCase(getAllOrdersByUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.orderList = [];
        state.error = action.payload;
      })

      // Get Order Details
      .addCase(getOrderDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrderDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orderDetails = action.payload?.data || null;
      })
      .addCase(getOrderDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.orderDetails = null;
        state.error = action.payload;
      });
  },
});

export const { resetOrderDetails, resetError } = shoppingOrderSlice.actions;
export default shoppingOrderSlice.reducer;
