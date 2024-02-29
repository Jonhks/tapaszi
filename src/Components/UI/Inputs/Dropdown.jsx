import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "./Dropdown.module.css";
export default function SelectVariants({
  label,
  value,
  options,
  handleChange,
  name,
}) {
  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, width: "100%" }}
      className={classes.formControl}
    >
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        name={name}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label="Age"
      >
        {options?.map((option, index) => (
          <MenuItem
            key={index}
            value={option?.value}
          >
            {option?.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
