import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { auth } from "../firebase/config";
import hello from "../assets/hello.png"; // Import your logo here
const HeaderBar = ({ onLogout }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const userEmail = auth.currentUser?.email || "User";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        gap: isMobile ? 2 : 0,
        p: "1.5rem",
        background: "linear-gradient(90deg, #005F73 0%, #0A9396 100%)", // Updated to primary and secondary colors
        borderRadius: "12px",
        color: "#fff",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
        mb: "2.5rem",
        mt: "2rem",
      }}
    >
      <Stack spacing={0.5}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
          }}
        >
          Hello, {userEmail.split("@")[0]} <img src={hello} alt="hello" className="icon" />
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#F1FAEE", // Light Grayish color
            fontSize: "1rem",
          }}
        >
          Manage your products efficiently and effortlessly.
        </Typography>
      </Stack>

      <Button
        variant="contained"
        onClick={onLogout}
        sx={{
          backgroundColor: "#94D2BD", // Light Teal color
          color: "#fff",
          fontWeight: 600,
          textTransform: "none",
          px: 3,
          py: 1.2,
          fontSize: "0.95rem",
          "&:hover": {
            backgroundColor: "#0A9396", // Secondary color
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default HeaderBar;
