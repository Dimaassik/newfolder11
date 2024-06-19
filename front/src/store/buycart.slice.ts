import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuyCartState {
    items: string[];
}

const initialState: BuyCartState = {
    items: [ 
        "sdsdsdsd",
        "sdsds132413"
    ]
};

const buyCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            state.items.push(itemId);
        },
    }
});
export default buyCart.reducer;
