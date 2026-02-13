import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Properly type the root element
const container = document.getElementById("root");

if (!container) {
    throw new Error("Root container missing in index.html");
}

createRoot(container).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
