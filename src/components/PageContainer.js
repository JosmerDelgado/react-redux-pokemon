import React from "react";
import {
  Paper,
  TextField,
  Button,
  Checkbox,
  Typography,
  Grid,
  FormControlLabel,
  FormGroup,
  CircularProgress,
  makeStyles,
  RadioGroup,
  Radio
} from "@material-ui/core";
import pokemonTypes from "../constants/pokemonTypes";
import HeaderFilter from "./HeaderFilter";
import TableList from "./TableList";

const useStyles = makeStyles(theme => ({
  filterContainer: {
    border: "1px solid black"
  }
}));

const urlGenerator = endpoint => `https://pokeapi.co/api/v2/${endpoint}`;

const PageContainer = () => {
  const [name, setName] = React.useState("");
  const [searchType, setSearchType] = React.useState("fire");
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemons, setPokemons] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({});
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

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setLoading(false);
      console.log("response", json);
      setPokemons(isTypeFilter ? json.pokemon : json.results);
      setPagination({ next: json.next, previous: json.previous });
    }
    fetchData();
  }, [isTypeFilter, url]);

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

export default PageContainer;
