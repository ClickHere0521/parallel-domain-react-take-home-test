import { Box, Typography, useMediaQuery } from "@mui/material";
import { SelectForm } from "../SelectForm";
import { categories } from "../../const";

export function Filter(props) {
  const { optionMap, handleChange } = props;
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: matches ? "flex" : "block" }}>
      <Box sx={{ marginY: "10px" }}>
        <Typography sx={{ fontSize: "14px" }}>FILTER BY:</Typography>
      </Box>
      {Object.keys(categories).map((category, index) => (
        <SelectForm
          key={`${category}-${index}`}
          name={category}
          onChange={handleChange}
          defaultText={categories[category]}
          options={Object.keys(optionMap[category])}
          otherProps={matches ? { marginX: "10px" } : { marginY: "10px" }}
        />
      ))}
    </Box>
  );
}
