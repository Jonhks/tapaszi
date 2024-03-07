import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import classes from "./Dropdown.module.css";
export default function SelectVariants({
  // id,
  indexPortfolio,
  disabled,
  indexTeam,
  label,
  value,
  options,
  handleChange,
  name,
}) {
  // console.log(port);
  // console.log(options);
  // console.log(indexTeam);
  // console.log(options[indexPortfoli]);
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
        // id={id}
        readOnly={disabled}
        value={value}
        onChange={(e) => {
          handleChange(
            options.filter((el) => el?.name === e?.target?.value)[0],
            indexTeam
          );
        }}
        label="Age"
      >
        {options?.map((option, index) => (
          <MenuItem
            key={index}
            value={option?.name}
          >
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
