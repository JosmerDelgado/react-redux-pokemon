import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Grid,
  CircularProgress,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { pokemonFetchData, setUrl } from "../actions/items";
import pokemonTypes from "../constants/pokemonTypes";
import { getOffset } from "../utils/stringHelper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "black",
    color: "white"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const TableList = ({ url, filterName: name, setNewUrl, type }) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({});
  useEffect(() => {
    setLoading(true);
    const fetchPokemons = async myUrl => {
      try {
        const response = await fetch(myUrl);
        if (!response.ok) {
          throw Error("Error Fetching Pokemons");
        }
        setLoading(false);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchPokemons(url);
  }, [url]);
  const isTypeFilter = type !== pokemonTypes[0];
  const onClickUpdateList = nextUrl => () => {
    setNewUrl(nextUrl);
  };
  const pokemonCount = data.count;
  const pokemonNames = (filtered, pokemonList) =>
    filtered
      ? pokemonList && pokemonList.pokemon && pokemonList.pokemon.name
      : pokemonList.name;
  const pokemons = (isTypeFilter ? data.pokemon : data.results) || [];
  const pagination = { next: data.next, previous: data.previous };
  const fromId = getOffset(pagination.next || "");

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Pokemon Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          ) : (
            pokemons
              .filter(val =>
                name && val
                  ? !pokemonNames(isTypeFilter, val).indexOf(name)
                  : true
              )
              .map((value, keys) => (
                <TableRow>
                  <StyledTableCell>
                    {pokemonNames(isTypeFilter, value)}
                  </StyledTableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>

      <Button
        onClick={onClickUpdateList(pagination.previous)}
        disabled={!pagination.previous}
      >
        Prev
      </Button>
      <span>
        {`${parseInt(fromId) -
          parseInt(pokemons.length)}-${fromId} of ${pokemonCount ||
          pokemons.length}`}
      </span>
      <Button
        onClick={onClickUpdateList(pagination.next)}
        disabled={!pagination.next}
      >
        Next
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  url: state.url,
  type: state.pokemonTypeSelected,
  data: state.pokemons,
  hasError: state.pokemonsHasError,
  isLoading: state.pokemonsLoading,
  filterName: state.pokemonFilterName
});

const mapDispatchToProps = dispatch => {
  return {
    setNewUrl: url => dispatch(setUrl(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableList);
