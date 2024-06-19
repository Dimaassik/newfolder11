import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddToCartPayload {
    itemId: string;
    title: string;
}

interface BuyCartState {
    id: string[],
    name: string[],
}

const initialState: BuyCartState = {
    id: [],
    name: [],
};

const buyCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { itemId, title } = action.payload;
            state.id.push(itemId);
            state.name.push(title);
        },
    }
});

export const { addToCart } = buyCart.actions;
export default buyCart.reducer;
