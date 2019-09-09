import React from "react";
import { connect } from "react-redux";
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
import { urlGenerator } from "../utils/urlHelper";
import {
  pokemonTypeSelected,
  pokemonFilterName,
  pokemonFetchData,
  setUrl
} from "../actions/items";

const useStyles = makeStyles(theme => ({
  filterContainer: {
    border: "1px solid black"
  },
  searchButton: {
    margin: "auto"
  }
}));

const HeaderFilter = ({
  updateUrl: setUrl,
  type: searchType,
  setTypeSelected,
  setFilterName,
  filterName: name,
  setNewUrl
}) => {
  // const [name, setName] = React.useState("");
  // const [searchType, setSearchType] = React.useState("all");
  const handleChange = e => setFilterName(e.target.value);
  const handleTypeChange = e => {
    const selectedType = e.target.value;
    const myUrl = urlGenerator(
      selectedType === "all" ? "pokemon" : `type/${selectedType}`
    );
    setTypeSelected(selectedType);
    setNewUrl(myUrl);
  };
  const onClickSearch = () => {
    const myUrl = urlGenerator(
      searchType === "all" ? "pokemon" : `type/${searchType}`
    );
    setNewUrl(myUrl);
  };
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
        {/* <Button onClick={onClickSearch} variant="contained" color="primary">
          Search
        </Button> */}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  type: state.pokemonTypeSelected,
  filterName: state.pokemonFilterName
});

const mapDispatchToProps = dispatch => {
  return {
    setTypeSelected: url => dispatch(pokemonTypeSelected(url)),
    setFilterName: name => dispatch(pokemonFilterName(name)),
    setNewUrl: url => dispatch(setUrl(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderFilter);
