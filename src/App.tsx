import { useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Home from "./pages/HomePage";
import Menu from "./pages/MenuPage";
import ProtectedRoute from "./components/ProtectedRoute";
import type { AppDispatch } from "./redux/store";

function App() {
    const dispatch = useDispatch<AppDispatch>(); // Typed dispatch

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            dispatch(setUser(user)); // user can be null
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />

                <Route
                    path="/order"
                    element={
                        <ProtectedRoute>
                            <Order />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
