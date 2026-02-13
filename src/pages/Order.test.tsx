import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Order from "./Order";
import { renderWithProviders } from "../test-utils";

describe("Order component", () => {
    it("renders empty state when cart is empty", () => {
        renderWithProviders(<Order />, {
            preloadedState: { order: { items: [] } },
        });

        expect(screen.getByText(/no items added yet/i)).toBeInTheDocument();
    });

    it("renders items in the cart", () => {
        renderWithProviders(<Order />, {
            preloadedState: {
                order: { items: [{ id: "1", name: "Pizza" }] },
            },
        });

        expect(screen.getByText("Pizza")).toBeInTheDocument();
    });

    it("clears the cart when confirm order is clicked", async () => {
        const user = userEvent.setup();

        const { store } = renderWithProviders(<Order />, {
            preloadedState: {
                order: { items: [{ id: "1", name: "Pizza" }] },
            },
        });

        const button = screen.getByRole("button", {
            name: /confirm order/i,
        });

        await user.click(button);

        expect(store.getState().order.items).toHaveLength(0);
    });
});
