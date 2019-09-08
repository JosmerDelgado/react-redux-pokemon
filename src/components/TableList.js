import React from "react";
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
  pokemonCount,
  pokemons,
  name,
  isTypeFilter,
  pagination,
  onClickUpdateList,
  fromId
}) => {
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
                  ? !(isTypeFilter
                      ? val && val.pokemon && val.pokemon.name
                      : val.name
                    ).indexOf(name)
                  : true
              )
              .map((value, keys) => (
                <TableRow>
                  <StyledTableCell>
                    {isTypeFilter
                      ? value && value.pokemon && value.pokemon.name
                      : value.name}
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
        {`${fromId}-${parseInt(fromId) +
          parseInt(pokemons.length)} of ${pokemonCount || pokemons.length}`}
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

export default TableList;
