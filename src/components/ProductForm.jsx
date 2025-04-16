import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import add from "../assets/add.png"; // Import your icon here
import AddBoxIcon from "@mui/icons-material/AddBox";

const ProductForm = ({ onSubmit, initialData = null, buttonLabel }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(1);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setPrice(initialData.price);
      setRating(initialData.rating);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, description, category, price, rating };
    onSubmit(product);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        margin: "auto",
        padding: 4,
        borderRadius: 3,
        backgroundColor: "#F1FAEE", // light grayish background
      }}
      maxWidth="100%"
    >
      <Typography variant="h6" gutterBottom sx={{ color: "#005F73", fontWeight: "bold" }}>
        {initialData ? "Update Product" : "Add New Product"}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0A9396',
                  },
                  '&:hover fieldset': {
                    borderColor: '#005F73',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#005F73',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{width: "50%"}}>
            <TextField
              select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0A9396',
                  },
                  '&:hover fieldset': {
                    borderColor: '#005F73',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#005F73',
                  },
                },
              }}
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0A9396',
                  },
                  '&:hover fieldset': {
                    borderColor: '#005F73',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#005F73',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Price (₹)"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              required
              inputProps={{ min: 0 }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#0A9396',
                  },
                  '&:hover fieldset': {
                    borderColor: '#005F73',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#005F73',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" height="100%">
              <Typography sx={{ mr: 2, color: "#2A9D8F" }}>Rating:</Typography>
              <Rating
                value={Number(rating)}
                onChange={(e, newValue) => setRating(newValue)}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              startIcon={
                <img
                  src={add}
                  alt="icon"
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                  }}                />
              }              sx={{
                fontWeight: "bold",
                padding: "12px",
                fontSize: "1rem",
                backgroundColor: "#005F73",
                color: "#F1FAEE",
                '&:hover': {
                  backgroundColor: "#0A9396",
                },
              }}
            >
              {buttonLabel}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProductForm;
