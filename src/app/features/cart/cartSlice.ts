import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";

interface CounterState {
  cartItems: IProduct[]
}

const initialState: CounterState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    // ** Actions (function(num))
    
  },
});

// export const {  } = counterSlice.actions;

export default cartSlice.reducer;
