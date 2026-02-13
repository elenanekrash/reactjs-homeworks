import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single order item
export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

// Define the slice state type
interface OrderState {
    items: OrderItem[];
}

// Initial state
const initialState: OrderState = {
    items: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<OrderItem>) => {
            state.items.push(action.payload);
        },
        clearOrder: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
