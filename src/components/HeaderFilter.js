import React from "react";
import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Radio,
  Button,
  RadioGroup
} from "@material-ui/core";
import pokemonTypes from "../constants/pokemonTypes";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  filterContainer: {
    border: "1px solid black"
  }
}));

const HeaderFilter = ({
  name,
  handleChange,
  searchType,
  handleTypeChange,
  onClickSearch
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.filterContainer}>
      <Grid item xs={3}>
        <TextField label="Filter" value={name} onChange={handleChange} />
      </Grid>
      <Grid item xs={4}>
        <Typography>Type</Typography>
        <RadioGroup row value={searchType} onChange={handleTypeChange}>
          {pokemonTypes.map(type => (
            <FormControlLabel
              label={type}
              control={<Radio value={type} name={type} />}
            />
          ))}
        </RadioGroup>
      </Grid>
      <Grid xs={3}>
        <Button onClick={onClickSearch}>Search</Button>
      </Grid>
    </Grid>
  );
};

export default HeaderFilter;
