/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function SharleysLandingPage() {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <Box
      sx={{ backgroundColor: "#002854", padding: "50px 0", minHeight: "100vh" }}
    >
      <Confetti width={windowDimension.width} height={windowDimension.height} />

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
