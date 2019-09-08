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
  },
  searchButton: {
    margin: "auto"
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
      <Grid item xs={12} md={3}>
        <TextField label="Filter" value={name} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography>Type</Typography>
        <RadioGroup row value={searchType} onChange={handleTypeChange}>
          {pokemonTypes.map((type, keys) => (
            <FormControlLabel
              key={`type${keys}`}
              label={type}
              control={<Radio value={type} name={type} />}
            />
          ))}
        </RadioGroup>
      </Grid>
      <Grid
        className={classes.searchButton}
        item
        xs={12}
        md={3}
        alignContent="center"
      >
        <Button onClick={onClickSearch} variant="contained" color="primary">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeaderFilter;
