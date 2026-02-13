import { useSelector, useDispatch } from "react-redux";
import { clearOrder } from "../redux/orderSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Order() {
    const items = useSelector((state) => state.order.items);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-[#f3f8f8] p-10">
                <h1 className="text-3xl font-light mb-6">Your Order</h1>

                {items.length === 0 ? (
                    <p>No items added yet.</p>
                ) : (
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
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
}

export default Order;
