/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState, useLayoutEffect } from "react";
import Confetti from "react-confetti";

function SharleysLandingPage() {
  const isClient = typeof window !== "undefined"; // Check if running on the client side

  const [windowDimension, setDimension] = useState({
    width: isClient ? window?.innerWidth : undefined,
    height: isClient ? window?.innerHeight : undefined,
  });

  const detectSize = () => {
    setDimension({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    });
  };

  useLayoutEffect(() => {
    if (isClient) {
      detectSize(); // Get initial window dimensions

      window.addEventListener("resize", detectSize);

      return () => {
        window.removeEventListener("resize", detectSize);
      };
    }
  }, [isClient]);

  return (
    <Box sx={{ backgroundColor: "#002854", minHeight: "100vh" }}>
      {isClient && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
        />
      )}

      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Image
              src="/sharley.jpeg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                className="text-flicker-in-glow"
              >
                Sharley: Mastermind, Maverick, and Now, Master's Graduate!
              </Typography>
              <Typography variant="body1">
                Sharley has officially unlocked her next level of expertise.
                Let's toast to her journey and explore the exciting
                possibilities ahead!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SharleysLandingPage;
