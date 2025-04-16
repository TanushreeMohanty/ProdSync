import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData = {}, buttonLabel = "Add Product" }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    ...initialData
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: "", description: "", category: "", price: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input type="text" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" value={product.rating} onChange={handleChange} required />
      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

export default ProductForm;
