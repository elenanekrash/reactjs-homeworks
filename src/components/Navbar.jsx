export default function Navbar({ cartCount }) {
    return (
        <nav className="flex justify-between items-center px-12 py-6 bg-white">
            <div className="text-teal-500 font-bold text-xl">Delivery</div>

            <div className="flex gap-8 text-gray-600">
                <span>Home</span>
                <span className="text-teal-500">Menu</span>
                <span>Company</span>
                <span>Login</span>
            </div>

            <div className="relative bg-teal-500 text-white px-4 py-2 rounded">
                🛒
                <span className="absolute -top-2 -right-2 bg-white text-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cartCount}
        </span>
            </div>
        </nav>
    );
}
