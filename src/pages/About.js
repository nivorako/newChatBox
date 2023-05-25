import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 100px)",
          backgroundColor: "primary.dark",
          display: "flex",
          justifyContent: "space-around",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          sx={{
            width: "40%",
            backgroundColor: "red",
          }}
        ></Box>
        <Box
          sx={{
            width: "40%",
            backgroundColor: "green",
          }}
        ></Box>
      </Box>
    </Container>
  );
};

export default About;
