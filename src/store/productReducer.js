import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { removeItem } from "./cartReducer";

export const filterProducts = createAsyncThunk(
 "products/filterProducts",
 async (prefix, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
   const res = await axios.get(
    `http://localhost:3000/items?cat_prefix=${prefix}`
   );
   return res.data;
  } catch (error) {
   rejectWithValue(error);
  }
 }
);

export const filterProductsByID = createAsyncThunk(
 "products/filterProductsByID",
 async (itemId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
   const res = await axios.get(`http://localhost:3000/items/${itemId}`);
   return res.data;
  } catch (error) {
   rejectWithValue(error);
  }
 }
);

export const shoppingCartProducts = createAsyncThunk(
 "products/shoppingCartProducts",
 async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

   const { items } = getState().cart;
   
if(!Object.keys(items).length ) {return []}

  const ids = Object.keys(items)
   .map((ele) => `id=${ele}`)
     .join("&");
    

  try {
   const res = await axios.get(`http://localhost:3000/items?${ids}`);
   return res.data;
  } catch (error) {
   rejectWithValue(error);
  }
 }
);

const productReducer = createSlice({
 name: "products",
 initialState: { items: [], loading: false, error: null, currentItem: null },

 reducers: {
  cleanProducts: (state) => {
   state.items = [];
  },
 },

 extraReducers: (builder) => {
   builder

     .addCase(filterProducts.pending, (state, action) => {
       // action is inferred correctly here if using TS
       state.loading = true;
       state.error = null;
     })
     .addCase(filterProducts.fulfilled, (state, action) => {
       state.loading = false;
       state.items = action.payload;
       // action is inferred correctly here if using TS
     })
     .addCase(filterProducts.rejected, (state, action) => {
       // action is inferred correctly here if using TS
       state.loading = false;
       state.error = action.payload;
     })

     .addCase(filterProductsByID.pending, (state, action) => {
       // action is inferred correctly here if using TS
       state.loading = true;
       state.error = null;
     })
     .addCase(filterProductsByID.fulfilled, (state, action) => {
       state.loading = false;
       state.currentItem = action.payload;
       // action is inferred correctly here if using TS
     })
     .addCase(filterProductsByID.rejected, (state, action) => {
       // action is inferred correctly here if using TS
       state.loading = false;
       state.error = action.payload;
     })









   
     .addCase(shoppingCartProducts.pending, (state, action) => {
       // action is inferred correctly here if using TS
       state.loading = true;
       state.error = null;
     })
     .addCase(shoppingCartProducts.fulfilled, (state, action) => {
       state.loading = false;
       state.items = action.payload;
       // action is inferred correctly here if using TS
     })
     .addCase(shoppingCartProducts.rejected, (state, action) => {
       // action is inferred correctly here if using TS
       state.loading = false;
       state.error = action.payload;
     })
   
   
     .addCase(removeItem, (state, action) => {
      // action is inferred correctly here if using TS
       state.loading = false;
       state.items = state.items.filter(item => item.id !== action.payload);
      
    });
 },
});

export default productReducer.reducer;
