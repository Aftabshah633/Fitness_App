import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/" style={{ display: "flex", flexDirection: "row" }}>
      <img
        src={Logo}
        alt="logo"
        style={{
          width: "48px",

          height: "48px",
          margin: "0px 20px",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: "24px",
          fontWeight: "700",
          color: "white", // Text color
        }}
      >
        Gold Gym
      </Typography>
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "white" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
