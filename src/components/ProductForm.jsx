import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData = null, buttonLabel }) => {
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [description, setDescription] = useState(initialData ? initialData.description : "");
  const [category, setCategory] = useState(initialData ? initialData.category : "");
  const [price, setPrice] = useState(initialData ? initialData.price : "");
  const [rating, setRating] = useState(initialData ? initialData.rating : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      category,
      price,
      rating,
    };
    onSubmit(product);
  };

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setPrice(initialData.price);
      setRating(initialData.rating);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
        </select>
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

export default ProductForm;
