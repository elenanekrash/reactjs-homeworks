import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

// Define the slice state type
interface AuthState {
    user: User | null;
}

// Initial state
const initialState: AuthState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
