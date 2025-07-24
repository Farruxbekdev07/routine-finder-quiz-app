import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "../../types/product";

interface WishlistState {
  product: Product[];
}

const initialState: WishlistState = {
  product: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.product?.find((p) => p.id === action.payload.id);
      console.log("exists", exists);
      if (exists) {
        state.product = state.product?.filter(
          (p) => p.id !== action.payload.id
        );
      } else {
        state.product?.unshift(action.payload);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
