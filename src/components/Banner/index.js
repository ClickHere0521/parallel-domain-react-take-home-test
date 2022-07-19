import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import banner from "../../images/banner.jpeg";

export function Banner() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "200px",
      }}
    >
      <img
        src={banner}
        alt="Parallel Domain Logo"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Typography
        sx={{
          position: "absolute",
          zIndex: 1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        variant="h1"
      >
        Join Us
      </Typography>
    </Box>
  );
}
