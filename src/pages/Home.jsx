import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import ProductForm from "../components/ProductForm";
import { signOut } from "firebase/auth";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleCreate = async (product) => {
    await addDoc(collection(db, "products"), product);
    fetchProducts();
  };

  const handleUpdate = async (product) => {
    const productRef = doc(db, "products", editingProduct.id);
    await updateDoc(productRef, product);
    setEditingProduct(null);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  const applyFilters = () => {
    let filtered = [...products];

    // 🔍 Search
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        `${p.name} ${p.description}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 📂 Category
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // 💰 Price Range
    if (priceRange === "low") {
      filtered = filtered.filter((p) => parseFloat(p.price) < 500);
    } else if (priceRange === "medium") {
      filtered = filtered.filter((p) => parseFloat(p.price) >= 500 && parseFloat(p.price) <= 1000);
    } else if (priceRange === "high") {
      filtered = filtered.filter((p) => parseFloat(p.price) > 1000);
    }

    // ⭐ Rating
    if (ratingFilter) {
      filtered = filtered.filter((p) => parseFloat(p.rating) >= parseFloat(ratingFilter));
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchQuery, categoryFilter, priceRange, ratingFilter, products]);

  return (
    <div>
      <h2>Welcome, {auth.currentUser?.email}</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
      <ProductForm
        onSubmit={editingProduct ? handleUpdate : handleCreate}
        initialData={editingProduct}
        buttonLabel={editingProduct ? "Update" : "Add"}
      />

      {/* 🔍 Filters */}
      <div style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
        <h4>Search & Filters</h4>
        <input
          type="text"
          placeholder="Search by name or description"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
        </select>

        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All Prices</option>
          <option value="low">Below ₹500</option>
          <option value="medium">₹500 - ₹1000</option>
          <option value="high">Above ₹1000</option>
        </select>

        <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="1">1+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
        </select>
      </div>

      <h3>All Products</h3>
      {filteredProducts.length === 0 && <p>No products found.</p>}
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <strong>{product.name}</strong>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
          <p>Rating: ⭐{product.rating}</p>
          <button onClick={() => setEditingProduct(product)}>Edit</button>
          <button
            onClick={() => handleDelete(product.id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
