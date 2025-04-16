import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        minHeight: "100%",
        backgroundColor: "#F1FAEE", // Light grayish background
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#005F73", // Primary color
        }}
      >
        All Products
      </Typography>

      {products.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "#999",
            fontStyle: "italic",
            marginTop: "2rem",
          }}
        >
          No products found.
        </Typography>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center" // Center items horizontally
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProductCard
                product={product}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProductList;
