import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const linkStyle = (path) =>
        location.pathname === path
            ? "text-teal-500"
            : "text-gray-600 hover:text-teal-500";

    return (
        <nav className="flex justify-between items-center px-12 py-6 bg-white shadow-sm">

            <div className="text-teal-500 font-bold text-xl">
                Delivery
            </div>

            <div className="flex gap-8 font-medium">

                <Link to="/" className={linkStyle("/")}>
                    Home
                </Link>

                <Link to="/menu" className={linkStyle("/menu")}>
                    Menu
                </Link>

                <Link to="/order" className={linkStyle("/order")}>
                    Order
                </Link>

                <Link to="/login" className={linkStyle("/login")}>
                    Login
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;
