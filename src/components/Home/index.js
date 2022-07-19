import { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Content, Filter, Heading } from "../../components";
import { applyFilter, applyGroups, getOptions } from "../../utils";
import apiClient from "../../service";

export function Home() {
  const [jobs, setJobs] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setFetching(true);
      await apiClient
        .get("postings/paralleldomain?mode=json")
        .then((result) => {
          setJobs(result.data);
          setFetching(false);
        });
    };
    fetchApi();
  }, []);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const optionMap = useMemo(() => getOptions(jobs), [jobs]);
  const filteredJobs = useMemo(
    () => applyFilter(jobs, filters),
    [jobs, filters]
  );
  const groupedJobs = useMemo(() => applyGroups(filteredJobs), [filteredJobs]);

  return (
    <Box
      sx={{
        width: "90%",
        margin: "0px auto",
        maxWidth: "1024px",
      }}
    >
      <Heading />
      {isFetching ? (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Filter optionMap={optionMap} handleChange={handleChange} />
          <Content jobs={groupedJobs} />
        </>
      )}
    </Box>
  );
}
