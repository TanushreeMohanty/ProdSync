import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import ProductForm from "../components/ProductForm";
import { signOut } from "firebase/auth";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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

  useEffect(() => {
    fetchProducts();
  }, []);

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

      <h3>All Products</h3>
      {products.length === 0 && <p>No products found.</p>}
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <strong>{product.name}</strong>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ₹{product.price}</p>
          <p>Rating: ⭐{product.rating}</p>
          <button onClick={() => setEditingProduct(product)}>Edit</button>
          <button onClick={() => handleDelete(product.id)} style={{ marginLeft: "10px", color: "red" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
