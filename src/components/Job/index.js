import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";

export function Job(props) {
  const { job } = props;
  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Link href={job.applyUrl} target="_blank" underline="none">
      <Box
        sx={{
          display: matches ? "flex" : "block",
          justifyContent: "space-between",
          borderBottom: "1px solid rgb(129, 146, 158)",
          paddingY: "30px",
        }}
      >
        <Box
          sx={{
            paddingBottom: `${matches ? "0px" : "30px"}`,
          }}
        >
          <Typography sx={{ paddingBottom: "10px", fontSize: "24px" }}>
            {job.text}
          </Typography>
          <Typography sx={{ letterSpacing: "2.5px", fontSize: "12px" }}>
            {`${job.categories.location} / ${job.categories.team}`.toUpperCase()}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{ height: "40px", fontSize: "12px", marginY: "auto" }}
        >
          Apply
        </Button>
      </Box>
    </Link>
  );
}
