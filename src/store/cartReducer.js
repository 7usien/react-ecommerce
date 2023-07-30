import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
 name: "cart",
 initialState: { items: {}, reachToMax: false, currentId: null },
 reducers: {
  addtocart: (state, action) => {
   let id = action.payload.id;
   let max = action.payload.max;

   state.currentId = id;

   if (state.items[id] === max) {
    state.reachToMax = true;
   } else {
    //reset reatchToMax
    if (state.reachToMax === true) {
     state.reachToMax = false;
    }

    if (state.items[id]) {
     state.items[id]++;
    } else {
     state.items[id] = 1;
    }
   }
   },
   removeItem: (state, action) => {
     
     const id = action.payload;
     console.log(id)
     delete state.items[id];
     
   },

  changeQuantity: (state, action) => {
    const { id, quantity } = action.payload;
    console.log(action)
   state.items[id] = quantity; //2:2 id:quantity
  },
  closeReachToMax: (state, action) => {
   state.reachToMax = false;
  },
 },
});

//optimize performance for cart
export default cartReducer.reducer;
export const { addtocart } = cartReducer.actions;

export const totalCartQuantity = createSelector(
 (state) => state.cart.items,
 (items) => {
  let totalQuantity = 0;
  console.log("fired");

  for (let key in items) {
   totalQuantity += items[key];
  }
  return totalQuantity;
 }
);

export const { closeReachToMax, changeQuantity, removeItem } = cartReducer.actions;
