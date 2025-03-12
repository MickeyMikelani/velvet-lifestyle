import React, { useState, useEffect } from 'react';
import './ProductSection.css';

const ProductSection = () => {
  // Sample product data
  const [products] = useState([
    { id: 1, name: 'Vanilla Bliss Candle', category: 'Candles', scent: 'Vanilla', price: 29.99 },
    { id: 2, name: 'Lavender Dream Candle', category: 'Candles', scent: 'Lavender', price: 29.99 },
    { id: 3, name: 'Rose Petal Diffuser', category: 'Diffusers', scent: 'Rose', price: 39.99 },
    { id: 4, name: 'Sandalwood Incense', category: 'Incense', scent: 'Sandalwood', price: 19.99 },
  ]);

  // State for selected category, scent, and cart
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedScent, setSelectedScent] = useState('All');
  const [cart, setCart] = useState([]);

  // Extract unique categories and scents for dropdowns
  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const scents = ['All', ...new Set(products.map((product) => product.scent))];

  // Filter products based on selected category and scent
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesScent = selectedScent === 'All' || product.scent === selectedScent;
    return matchesCategory && matchesScent;
  });

  // Handle adding to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Handle removing from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Handle quantity change in cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <section className="product-section">
      <h2>Our Products</h2>
      <div className="filters">
        <div className="dropdown">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="scent">Scent: </label>
          <select
            id="scent"
            value={selectedScent}
            onChange={(e) => setSelectedScent(e.target.value)}
          >
            {scents.map((scent) => (
              <option key={scent} value={scent}>
                {scent}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Scent: {product.scent}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="shopping-cart">
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name} - ${item.price.toFixed(2)} x</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            ))}
            <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;