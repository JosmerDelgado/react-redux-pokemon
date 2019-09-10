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
import TableList from "./TableList";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "black",
    color: "white"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const TableListContainer = ({ url, filterName, setNewUrl, type }) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({});
  useEffect(() => {
    setLoading(true);
    setData({});
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

  return (
    <TableList
      loading={loading}
      onClickUpdateList={onClickUpdateList}
      isTypeFilter={isTypeFilter}
      data={data}
      name={filterName}
    />
  );
};

const mapStateToProps = state => ({
  url: state.url,
  type: state.pokemonTypeSelected,
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
)(TableListContainer);
