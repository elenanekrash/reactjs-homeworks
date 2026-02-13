import orderReducer, { addItem, clearOrder } from "./orderSlice";
import type { OrderItem } from "./orderSlice";

describe("orderSlice", () => {
    const initialState = { items: [] };

    it("should return initial state", () => {
        expect(orderReducer(undefined, { type: "unknown" })).toEqual({
            items: [],
        });
    });

    it("should add an item to the cart", () => {
        const item: OrderItem = { id: "1", name: "Pizza" };
        const nextState = orderReducer(initialState, addItem(item));
        expect(nextState.items).toHaveLength(1);
        expect(nextState.items[0]).toEqual(item);
    });

    it("should clear the cart", () => {
        const preState = { items: [{ id: "1", name: "Pizza" }] };
        const nextState = orderReducer(preState, clearOrder());
        expect(nextState.items).toHaveLength(0);
    });
});
