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
  TableBody
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import pokemonTypes from "../constants/pokemonTypes";
import { getOffset } from "../utils/stringHelper";
import { setUrl } from "../actions/items";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "black",
    color: "white"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const TableList = ({
  loading,
  name,
  onClickUpdateList,
  isTypeFilter,
  data = {}
}) => {
  const pokemonNames = (filtered, pokemonList) =>
    filtered
      ? pokemonList && pokemonList.pokemon && pokemonList.pokemon.name
      : pokemonList.name;
  const pokemons = (isTypeFilter ? data.pokemon : data.results) || [];
  const pokemonCount = data.count || pokemons.length;
  const pagination = { next: data.next, previous: data.previous };
  const fromId = getOffset(pagination.next || "");
  const offsetNumber =
    parseInt(fromId) - parseInt(pokemons.length) < 0
      ? 0
      : parseInt(fromId) - parseInt(pokemons.length);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Pokemon Name</StyledTableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        ) : (
          <TableBody>
            {pokemons
              .filter(val =>
                name && val
                  ? !pokemonNames(isTypeFilter, val).indexOf(name)
                  : true
              )
              .map((value, keys) => (
                <TableRow key={`table-${keys}`}>
                  <StyledTableCell test-id="pokemon-list">
                    {pokemonNames(isTypeFilter, value)}
                  </StyledTableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>

      <Button
        onClick={onClickUpdateList(pagination.previous)}
        disabled={!pagination.previous}
        test-id="prev-button"
      >
        Prev
      </Button>
      <span>
        {`${offsetNumber}-${fromId || pokemons.length} of ${pokemonCount}`}
      </span>
      <Button
        onClick={onClickUpdateList(pagination.next)}
        disabled={!pagination.next}
        test-id="next-button"
      >
        Next
      </Button>
    </>
  );
};

export default TableList;
