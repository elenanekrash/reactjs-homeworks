import { useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/order");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User registered successfully!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-[#f3f8f8] flex items-center justify-center px-4">

                <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">

                    <h1 className="text-3xl font-light text-center mb-8">
                        Login to your account
                    </h1>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">

                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />

                        <button
                            type="submit"
                            className="bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            onClick={handleRegister}
                            className="border border-teal-500 text-teal-500 py-3 rounded-lg hover:bg-teal-50 transition"
                        >
                            Register
                        </button>

                    </form>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default Login;
