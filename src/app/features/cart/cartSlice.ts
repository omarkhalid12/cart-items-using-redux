import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "../../../utils/Functions";

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
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>)=> {
      state.cartItems = addItemToShoppingCart(state.cartItems, actionPayload.payload)
    }
  },
});

export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
