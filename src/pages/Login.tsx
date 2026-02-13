import React, { useState, ChangeEvent, SubmitEvent } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const handleLogin = async (e: SubmitEvent) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/order");
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User registered successfully!");
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 w-full max-w-md transition-colors">
                    <h1 className="text-3xl font-light text-center mb-8 text-gray-900 dark:text-gray-50">
                        Login to your account
                    </h1>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={handleEmailChange}
                            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={handlePasswordChange}
                            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-50"
                        />

                        <button
                            type="submit"
                            className="bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            onClick={handleRegister}
                            className="border border-teal-500 text-teal-500 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Login;
