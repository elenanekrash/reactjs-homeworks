import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Order from "./pages/Order";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>

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
