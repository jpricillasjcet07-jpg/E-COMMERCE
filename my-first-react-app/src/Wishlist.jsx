import "./App.css";

function Wishlist() {
  return (
    <div className="page">
      <h2>My Wishlist</h2>

      <div className="wishlist-container">
        <div className="wishlist-card">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Phone"
          />
          <h3>JKR Smart Phone</h3>
          <button>Move to Cart</button>
        </div>

        <div className="wishlist-card">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            alt="Laptop"
          />
          <h3>JKR Laptop</h3>
          <button>Move to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;