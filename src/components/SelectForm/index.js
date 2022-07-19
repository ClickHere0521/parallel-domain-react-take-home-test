import { Box, MenuItem, Select } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export function SelectForm(props) {
  const { name, onChange, defaultText, options, otherProps } = props;

  return (
    <Box sx={{ ...otherProps }}>
      <Select
        fullWidth
        labelId={name}
        id={name}
        name={name}
        defaultValue="All"
        onChange={onChange}
        IconComponent={() => <ArrowDropDownIcon color="primary" />}
        sx={{
          fontSize: "15px",
          backgroundColor: "rgb(17, 26, 32)",
          "& fieldSet": {
            borderColor: "#81929e",
          },
          "&:focus": {
            backgroundColor: "yellow",
          },
          "& .MuiPaper-root .MuiPaper-elevation .MuiPaper-rounded .MuiPaper-elevation1":
            {
              backgroundColor: "rgb(17, 26, 32)",
            },
        }}
      >
        <MenuItem value="All">{defaultText.toUpperCase()}</MenuItem>
        {options.map((item, index) => (
          <MenuItem key={`${item}-${index}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
