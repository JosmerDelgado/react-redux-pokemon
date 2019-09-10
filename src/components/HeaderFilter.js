import React from "react";
import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
import pokemonTypes from "../constants/pokemonTypes";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  filterContainer: {
    border: "1px solid black"
  },
  typeList: {
    justifyContent: "center"
  }
}));
const HeaderFilter = ({ searchType, handleChange, name, handleTypeChange }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.filterContainer}>
      <Grid item xs={12} md={6}>
        <TextField
          test-id="text-input"
          label="Filter"
          value={name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Type</Typography>
        <RadioGroup
          row
          className={classes.typeList}
          value={searchType}
          onChange={handleTypeChange}
        >
          {pokemonTypes.map((type, keys) => (
            <FormControlLabel
              test-id="radio-input"
              key={`type${keys}`}
              label={type}
              control={<Radio value={type} name={type} />}
            />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default HeaderFilter;
