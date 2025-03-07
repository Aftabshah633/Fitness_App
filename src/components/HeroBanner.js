import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import gym from "../assets/images/gym.jpeg"; // Make sure the image path is correct

// Animation for the text fade-in
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        marginTop: "2rem",
        backgroundImage: `url(${gym})`, // Correctly apply the image as a URL
        backgroundSize: "cover",

        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          zIndex: 10,
          textAlign: "center",
          padding: "20px",
          color: "#fff",
          animation: `${fadeIn} 1s ease-in-out`,
        }}
      >
        <Typography
          variant="h2"
          fontWeight="700"
          sx={{
            fontSize: { lg: "50px", xs: "36px" },
            marginBottom: "20px",
            color: "#fff",
          }}
        >
          Transform Your Body, Transform Your Life
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { lg: "22px", xs: "18px" },
            marginBottom: "40px",
            color: "#fff",
          }}
        >
          Join the best fitness community and start your journey to a healthier,
          stronger you.
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          href="#exercises"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            fontSize: "18px",
            padding: "14px 40px",
            borderRadius: "30px",
            textTransform: "none",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#ff3f3f",
            },
          }}
        >
          Start Your Fitness Journey
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
