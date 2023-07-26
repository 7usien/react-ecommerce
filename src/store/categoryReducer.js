import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { loading: false, error: null, records: [] };

export const getCategories = createAsyncThunk(
 "categories/getCategories",
 async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
   const res = await axios.get("http://localhost:3000/category");
   return res.data;
  } catch (err) {
   rejectWithValue(err.message);
  }
 }
);



const categoryReducer = createSlice({
 name: "categories",
 initialState,
 extraReducers: (builder) => {
  builder
   .addCase(getCategories.pending, (state, action) => {
    // action is inferred correctly here if using TS
    state.loading = true;
    state.error = null;
   })
   .addCase(getCategories.fulfilled, (state, action) => {
    state.loading = false;
    state.records = action.payload;
    // action is inferred correctly here if using TS
   })
   .addCase(getCategories.rejected, (state, action) => {
    // action is inferred correctly here if using TS
    state.loading = false;
    state.error = action.payload;
   })



 },
});

export default categoryReducer.reducer;
