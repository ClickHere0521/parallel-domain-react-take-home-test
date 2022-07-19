import { Box, Typography } from "@mui/material";
import { Job } from "../Job";

export function Content(props) {
  const { jobs } = props;
  return (
    <Box>
      {Object.keys(jobs).map((team, index) => (
        <Box key={`${team}-${index}`} sx={{ marginY: "80px" }}>
          <Typography
            color="primary"
            fontWeight="bold"
            sx={{
              letterSpacing: "2px",
              lineHeight: 1.2,
              fontSize: "15px",
            }}
          >
            {team.toUpperCase()}
          </Typography>
          {jobs[team].map((job, index) => (
            <Job key={`${job.text}-${index}`} job={job} />
          ))}
        </Box>
      ))}
    </Box>
  );
}
