import React from "react";
import { Grid, CircularProgress, Button } from "@material-ui/core";

const TableList = ({
  loading,
  pokemons,
  name,
  isTypeFilter,
  pagination,
  onClickUpdateList
}) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          Name
        </Grid>
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
            .map(value => (
              <Grid item xs={12}>
                {isTypeFilter
                  ? value && value.pokemon && value.pokemon.name
                  : value.name}
              </Grid>
            ))
        )}
      </Grid>
      <Button
        onClick={onClickUpdateList(pagination.previous)}
        disabled={!pagination.previous}
      >
        Prev
      </Button>
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
