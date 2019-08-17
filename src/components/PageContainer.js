import React from "react";
import { connect } from "react-redux";
import { pokemonFetchData } from "../actions/items";
import { Paper } from "@material-ui/core";
import HeaderFilter from "./HeaderFilter";
import TableList from "./TableList";

const urlGenerator = endpoint => `https://pokeapi.co/api/v2/${endpoint}`;

const PageContainer = ({ fetchData, isLoading: loading, hasError, data }) => {
  const [name, setName] = React.useState("");
  const [searchType, setSearchType] = React.useState("fire");
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon");
  const pagination = { next: data.next, previous: data.previous };
  const handleChange = e => setName(e.target.value);
  const handleTypeChange = e => setSearchType(e.target.value);
  const onClickSearch = () => {
    const myUrl = urlGenerator(`type/${searchType}`);
    setUrl(myUrl);
  };
  const onClickUpdateList = nextUrl => () => {
    setUrl(nextUrl);
  };
  const isTypeFilter = url.indexOf("type") > 0;
  const pokemons = (isTypeFilter ? data.pokemon : data.results) || [];
  debugger;
  React.useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  const headerFilterProps = {
    searchType,
    name,
    handleChange,
    handleTypeChange,
    onClickSearch
  };

  const tableListProps = {
    loading,
    pokemons,
    name,
    isTypeFilter,
    pagination,
    onClickUpdateList
  };

  return (
    <Paper>
      <HeaderFilter {...headerFilterProps} />
      <TableList {...tableListProps} />
    </Paper>
  );
};

const mapStateToProps = state => ({
  data: state.pokemons,
  hasError: state.pokemonsHasError,
  isLoading: state.pokemonsLoading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(pokemonFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
