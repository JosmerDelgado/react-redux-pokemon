import React from "react";
import { connect } from "react-redux";
import { pokemonFetchData, setUrl } from "../actions/items";
import { Paper } from "@material-ui/core";
import HeaderFilter from "./HeaderFilter";
import TableList from "./TableList";
import { urlGenerator } from "../utils/urlHelper";

const PageContainer = () => {
  return (
    <Paper>
      <HeaderFilter />
      <TableList />
    </Paper>
  );
};

export default PageContainer;
