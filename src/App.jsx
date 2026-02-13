import MenuPage from "./pages/MenuPage";

export default function App() {
    return <MenuPage />;
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 py-6 bg-white shadow-sm">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-4 border-teal-500 border-t-transparent rotate-45"></div>
            </div>

            <div className="hidden md:flex gap-10 text-gray-600 font-medium">
                <a href="#" className="text-teal-500">Home</a>
                <a href="#">Menu</a>
                <a href="#">Company</a>
                <a href="#">Login</a>
            </div>

            <button className="relative bg-teal-500 p-3 rounded-xl text-white shadow-md">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-white text-teal-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
            </button>
        </nav>
    );
}

/* ---------------- HERO ---------------- */

function Hero() {
    return (
        <section className="px-12 py-20 grid md:grid-cols-2 items-center gap-16">
            {/* LEFT */}
            <div>
                <h1 className="text-5xl md:text-6xl font-light leading-tight">
                    Beautiful food & <br />
                    takeaway,{" "}
                    <span className="text-teal-500 font-medium">delivered</span>{" "}
                    <br />
                    to your door.
                </h1>

                <p className="mt-6 text-gray-500 max-w-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500.
                </p>

                <button className="mt-8 bg-teal-500 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-teal-600 transition">
                    Place an Order
                </button>

                <div className="mt-8 flex items-center gap-3 text-sm">
                    <Star className="text-green-500 fill-green-500" size={20} />
                    <div>
                        <span className="font-semibold">Trustpilot</span>
                        <p className="text-gray-500">
                            <span className="text-teal-500 font-medium">4.8 out of 5</span> based on 2000+ reviews
                        </p>
                    </div>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                    alt="Food"
                    className="rounded-3xl shadow-xl w-full object-cover"
                />

                {/* Floating phone mock */}
                <div className="absolute -bottom-10 -right-10 bg-teal-500 p-6 rounded-full shadow-xl">
                    <div className="bg-white w-20 h-36 rounded-2xl flex items-center justify-center">
                        <span className="text-teal-500 font-bold text-lg">App</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
    return (
        <footer className="bg-[#eaf4f4] px-12 py-20 mt-20">
            <div className="grid md:grid-cols-4 gap-12">
                {/* LEFT */}
                <div>
                    <div className="w-10 h-10 rounded-full border-4 border-teal-500 border-t-transparent rotate-45 mb-4"></div>
                    <p className="text-gray-500">
                        Takeaway & Delivery template <br />
                        for small - medium businesses.
                    </p>
                </div>

                {/* COMPANY */}
                <div>
                    <h4 className="font-semibold mb-4 tracking-wide">COMPANY</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li>Home</li>
                        <li>Order</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* TEMPLATE */}
                <div>
                    <h4 className="font-semibold mb-4 tracking-wide">TEMPLATE</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li>Style Guide</li>
                        <li>Changelog</li>
                        <li>Licence</li>
                        <li>Webflow University</li>
                    </ul>
                </div>

                {/* FLOWBASE */}
                <div>
                    <h4 className="font-semibold mb-4 tracking-wide">FLOWBASE</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li>More Cloneables</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>
                    Built by <span className="text-teal-500">Flowbase</span>. Powered by{" "}
                    <span className="text-teal-500">Webflow</span>
                </p>

                <div className="flex gap-6 mt-6 md:mt-0">
                    <div className="w-8 h-8 border rounded-full"></div>
                    <div className="w-8 h-8 border rounded-full"></div>
                    <div className="w-8 h-8 border rounded-full"></div>
                </div>
            </div>
        </footer>
    );
}
