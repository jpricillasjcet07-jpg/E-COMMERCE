import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        JKR Electronics
      </div>

      <div className="nav-links">
        <Link to="/products">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
