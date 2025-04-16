import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Box, Container, Typography } from "@mui/material";
import ProductForm from "../components/ProductForm";
import HeaderBar from "../components/HeaderBar";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";

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
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        `${p.name} ${p.description}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }
    if (priceRange === "low") {
      filtered = filtered.filter((p) => parseFloat(p.price) < 500);
    } else if (priceRange === "medium") {
      filtered = filtered.filter((p) => parseFloat(p.price) >= 500 && parseFloat(p.price) <= 1000);
    } else if (priceRange === "high") {
      filtered = filtered.filter((p) => parseFloat(p.price) > 1000);
    }
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
    <Container maxWidth="100%">
      <HeaderBar onLogout={handleLogout} />
      <Box sx={{ marginBottom: "2rem" }}>
        <ProductForm
          onSubmit={editingProduct ? handleUpdate : handleCreate}
          initialData={editingProduct}
          buttonLabel={editingProduct ? "Update" : "Add"}
        />
      </Box>
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <ProductList products={filteredProducts} onEdit={setEditingProduct} onDelete={handleDelete} />
    </Container>
  );
};

export default Home;
