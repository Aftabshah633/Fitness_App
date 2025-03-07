import React from "react";
import { Stack, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #FF2625 0%, #FFA9A9 100%)", // Gradient background
      padding: "40px 20px",
      color: "#fff",
      borderTopLeftRadius: "50% 15px", // Creating a curve at the top of the footer
      borderTopRightRadius: "50% 15px",
      position: "relative",
    }}
  >
    {/* Upper Section with Logo */}
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={4}
      sx={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "180px" }} />
      </div>

      {/* Social Media Links */}
      <Stack direction="row" spacing={2}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <LinkedIn />
        </IconButton>
      </Stack>
    </Stack>

    {/* Navigation Links Section */}
    <Stack
      direction="row"
      spacing={4}
      sx={{
        mt: 4,
        maxWidth: "1200px",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <Link
        href="#"
        sx={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "16px",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Home
      </Link>
      <Link
        href="#"
        sx={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "16px",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        About
      </Link>
      <Link
        href="#"
        sx={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "16px",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Contact
      </Link>
      <Link
        href="#"
        sx={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "16px",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Privacy Policy
      </Link>
    </Stack>

    {/* Bottom Section with Copyright */}
    <Typography
      sx={{
        textAlign: "center",
        mt: 5,
        fontSize: "14px",
        opacity: 0.7,
        fontFamily: "Alegreya, serif",
      }}
    >
      &copy; {new Date().getFullYear()} GymSite. All rights reserved.
    </Typography>

    {/* Footer Tagline */}
    <Typography
      sx={{
        textAlign: "center",
        mt: 1,
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "Alegreya, serif",
      }}
    >
      Made with ❤️ by GymTech
    </Typography>
  </div>
);

export default Footer;
