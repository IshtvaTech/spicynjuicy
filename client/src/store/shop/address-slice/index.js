import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL with fallback and warning
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
  addressList: [],
  error: null, // Track errors
};

// Add New Address
export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/shop/address/add`,
        formData
      );
      console.log("Address Added:", response.data);
      return response.data;
    } catch (error) {
      console.error("Add Address Error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to add address");
    }
  }
);

// Fetch All Addresses
export const fetchAllAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/api/shop/address/get/${userId}`
      );
      console.log("Fetched Addresses:", response.data);
      return response.data;
    } catch (error) {
      console.error("Fetch Address Error:", error.response?.data);
      return rejectWithValue(
        error.response?.data || "Failed to fetch addresses"
      );
    }
  }
);

// Edit Address
export const editAddress = createAsyncThunk(
  "/addresses/editAddress",
  async ({ userId, addressId, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/shop/address/update/${userId}/${addressId}`,
        formData
      );
      console.log("Updated Address:", response.data);
      return response.data;
    } catch (error) {
      console.error("Edit Address Error:", error.response?.data);
      return rejectWithValue(error.response?.data || "Failed to edit address");
    }
  }
);

// Delete Address
export const deleteAddress = createAsyncThunk(
  "/addresses/deleteAddress",
  async ({ userId, addressId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/shop/address/delete/${userId}/${addressId}`
      );
      console.log("Deleted Address:", response.data);
      return response.data;
    } catch (error) {
      console.error("Delete Address Error:", error.response?.data);
      return rejectWithValue(
        error.response?.data || "Failed to delete address"
      );
    }
  }
);

// Address Slice
const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add New Address
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList.push(action.payload.data);
      })
      .addCase(addNewAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch All Addresses
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = action.payload.data;
      })
      .addCase(fetchAllAddresses.rejected, (state, action) => {
        state.isLoading = false;
        state.addressList = [];
        state.error = action.payload;
      })

      // Edit Address
      .addCase(editAddress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedAddress = action.payload.data;
        state.addressList = state.addressList.map((address) =>
          address._id === updatedAddress._id ? updatedAddress : address
        );
      })
      .addCase(editAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Address
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        const addressIdToDelete = action.payload.data._id;
        state.addressList = state.addressList.filter(
          (address) => address._id !== addressIdToDelete
        );
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default addressSlice.reducer;
