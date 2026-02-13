import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import orderReducer from "./redux/orderSlice";
import { ThemeProvider } from "./context/ThemeContext";
import "./i18n"; // ensure i18n is loaded

interface Options {
    preloadedState?: any;
}

export function renderWithProviders(
    ui: ReactElement,
    { preloadedState }: Options = {}
) {
    const store = configureStore({
        reducer: { order: orderReducer },
        preloadedState,
    });

    function Wrapper({ children }: { children: React.ReactNode }) {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <ThemeProvider>{children}</ThemeProvider>
                </MemoryRouter>
            </Provider>
        );
    }

    return {
        store,
        ...render(ui, { wrapper: Wrapper }),
    };
}
