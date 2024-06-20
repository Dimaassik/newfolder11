import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddToCartPayload {
    itemId: string;
    title: string;
}

interface CartItem {
    id: string;
    name: string;
}

const initialState: CartItem[] = [];

const buyCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { itemId, title } = action.payload;
            state.push({ id: itemId, name: title });
        },
    }
});

export const { addToCart } = buyCart.actions;
export default buyCart.reducer;
