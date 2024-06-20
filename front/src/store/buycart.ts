import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddToCartPayload {
    itemId: string;
    title: string;
}

interface CartItem {
    id: string;
    name: string;
    count: number;
}

const initialState: CartItem[] = [];

const buyCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { itemId, title } = action.payload;
            const existingItem = state.find((item) => item.name === title)
            if (existingItem) {
                existingItem.count++
            }else
            {
                state.push({ id: itemId, name: title, count: 1 });
            }
        },
    },
    // selectors:{
    //     selectTotalItemCount :() => createSelector(
    //         [selectCartItems],
    //         (cartItems) => cartItems.reduce((total, item) => total + item.count, 0)
    //     );
    // }
});


export const { addToCart } = buyCart.actions;
export default buyCart.reducer;
