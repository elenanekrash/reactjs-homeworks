import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrder } from "../redux/orderSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { RootState, AppDispatch } from "../redux/store";
import type { OrderItem } from "../redux/orderSlice";

const Order: React.FC = () => {
    const items = useSelector((state: RootState) => state.order.items);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <Navbar cartCount={items.length} />

            <section className="min-h-screen p-10 bg-gray-100 dark:bg-gray-900 transition-colors">
                <h1 className="text-3xl font-light mb-6 text-gray-900 dark:text-gray-50">
                    Your Order
                </h1>

                {items.length === 0 ? (
                    <p className="text-gray-700 dark:text-gray-300">No items added yet.</p>
                ) : (
                    <div className="space-y-4">
                        {items.map((item: OrderItem, index: number) => (
                            <div
                                key={item.id || index}
                                className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 text-gray-900 dark:text-gray-50 transition-colors"
                            >
                                {item.name}
                            </div>
                        ))}

                        <button
                            onClick={() => dispatch(clearOrder())}
                            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            Confirm Order
                        </button>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
};

export default Order;
