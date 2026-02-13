import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { renderWithProviders } from "../test-utils";

describe("Navbar", () => {
    it("renders navigation links", () => {
        renderWithProviders(<Navbar cartCount={3} />);

        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/menu/i)).toBeInTheDocument();
        expect(screen.getByText(/order/i)).toBeInTheDocument();
    });
});
