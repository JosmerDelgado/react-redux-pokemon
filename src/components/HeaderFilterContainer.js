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
import HeaderFilter from "./HeaderFilter";

const HeaderFilterContainer = ({
  type: searchType,
  filterName: name,
  setTypeSelected,
  setFilterName,
  setNewUrl
}) => {
  const handleChange = e => setFilterName(e.target.value);
  const handleTypeChange = e => {
    const selectedType = e.target.value;
    const myUrl = urlGenerator(
      selectedType === "all" ? "pokemon" : `type/${selectedType}`
    );
    setTypeSelected(selectedType);
    setNewUrl(myUrl);
  };

  return (
    <HeaderFilter
      searchType={searchType}
      handleTypeChange={handleTypeChange}
      handleChange={handleChange}
      name={name}
    />
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
)(HeaderFilterContainer);
