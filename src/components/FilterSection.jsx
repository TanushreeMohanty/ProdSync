import React from "react";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";

const FilterSection = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  priceRange,
  setPriceRange,
  ratingFilter,
  setRatingFilter,
}) => {
  return (
    <Box
      sx={{
        marginBottom: "2rem",
        padding: { xs: 2, sm: 3 },
        backgroundColor: "#F1FAEE",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#005F73",
        }}
      >
        Search & Filters
      </Typography>
      <Grid container spacing={3} >
        {/* Search Input */}
        <Grid item xs={12} sm={6} md={3} sx={{width: "30%"}}>
          <TextField
            fullWidth
            label="Search by name or description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
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

        {/* Category Filter */}
        <Grid item xs={12} sm={6} md={3} sx={{width: "20%"}}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              label="Category"
              sx={{
                backgroundColor: "#fff",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0A9396',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005F73',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005F73',
                },
              }}
            >
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
              <MenuItem value="Clothing">Clothing</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Price Range Filter */}
        <Grid item xs={12} sm={6} md={3} sx={{width: "20%"}}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="price-label">Price Range</InputLabel>
            <Select
              labelId="price-label"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              label="Price Range"
              sx={{
                backgroundColor: "#fff",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0A9396',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005F73',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005F73',
                },
              }}
            >
              <MenuItem value="">All Prices</MenuItem>
              <MenuItem value="low">Below ₹500</MenuItem>
              <MenuItem value="medium">₹500 - ₹1000</MenuItem>
              <MenuItem value="high">Above ₹1000</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Rating Filter */}
        <Grid item xs={12} sm={6} md={3} sx={{width: "20%"}}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              label="Rating"
              sx={{
                backgroundColor: "#fff",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0A9396',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005F73',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005F73',
                },
              }}
            >
              <MenuItem value="">All Ratings</MenuItem>
              <MenuItem value="1">1+ Stars</MenuItem>
              <MenuItem value="2">2+ Stars</MenuItem>
              <MenuItem value="3">3+ Stars</MenuItem>
              <MenuItem value="4">4+ Stars</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterSection;
