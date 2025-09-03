import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Fancy Finds Boutique👗🎀</h1>
      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-yellow-300 transition"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="hover:text-yellow-300 transition"
        >
          Cart
        </Link>
        <Link
          to="/checkout"
          className="hover:text-yellow-300 transition"
        >
          Checkout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;