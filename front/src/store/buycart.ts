import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddToCartPayload {
    id: string;
    name: string;
    price: string;
    img: string;
}

interface RemFromCartPayload {
    name: string;
}

interface CartItem {
    id: string;
    name: string;
    count: number;
    price: string;
    img: string;
}

const initialState: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

const buyCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { id, name, price, img } = action.payload;
            const existingItem = state.find(item => item.name === name);
            if (existingItem) {
                existingItem.count++;
            } else {
                state.push({ id, name, count: 1, price, img });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        remFromCart: (state, action: PayloadAction<RemFromCartPayload>) => {
            const { name } = action.payload;
            const existingItem = state.find(item => item.name === name);
            if (existingItem) {
                if (existingItem.count > 1) {
                    existingItem.count--;
                } else {
                    state.splice(state.indexOf(existingItem), 1);
                }
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        clearCart: () => {
            localStorage.removeItem('cart');
            return [];
        }
    },
});

export const { addToCart, remFromCart, clearCart } = buyCart.actions;
export const selectTotalItemCount = (state: { cart: CartItem[] }) => state.cart.reduce((total, item) => total + item.count, 0);
export const selectTotalPrice = (state: { cart: CartItem[] }) => state.cart.reduce((total, item) => total + parseFloat(item.price) * item.count, 0);

export default buyCart.reducer;