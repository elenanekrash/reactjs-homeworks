import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Home from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch(setUser(user));
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

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
