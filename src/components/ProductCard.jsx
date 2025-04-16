import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Rating,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 3,
        boxShadow: 4,
        backgroundColor: "#005F73", // Light Grayish background
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flex: 1, padding: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
            fontSize: { xs: "1.1rem", sm: "1.4rem" },
            color: "#F1FAEE", // Primary
            letterSpacing: "0.5px",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "1.5rem",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            color: "#94D2BD", // Text color
            lineHeight: 1.6,
          }}
        >
          {product.description}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              fontWeight: "bold",
              color: "#94D2BD", // Secondary
            }}
          >
            ₹{product.price}
          </Typography>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "#FFD700",
            }}
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", padding: 2 , }}>
        <Box>
          <IconButton
            onClick={() => onEdit(product)}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              color: "#94D2BD",
              "&:hover": {
                backgroundColor: "#000", // Accent
              },
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => onDelete(product.id)}
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              color: "#D32F2F",
              "&:hover": {
                backgroundColor: "#000", // Soft red tint
              },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
