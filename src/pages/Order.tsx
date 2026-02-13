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

            <section className="min-h-screen bg-[#f3f8f8] p-10">
                <h1 className="text-3xl font-light mb-6">Your Order</h1>

                {items.length === 0 ? (
                    <p>No items added yet.</p>
                ) : (
                    <div className="space-y-4">
                        {items.map((item: OrderItem, index: number) => (
                            <div
                                key={item.id || index}
                                className="bg-white shadow rounded-xl p-4"
                            >
                                {item.name}
                            </div>
                        ))}

                        <button
                            onClick={() => dispatch(clearOrder())}
                            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
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
