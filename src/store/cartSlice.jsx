import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },

  // reducer : pure function that takes current state and action as an argument and returns updated state
  // action : plain javascript object containing type and payload
  reducers: {
    add: (state, action) => {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;

      return { ...state, total: total, cartList: updatedCartList };
    },
    remove: (state, action) => {
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );

      const total = state.total - action.payload.price;

      return { ...state, total: total, cartList: updatedCartList };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
