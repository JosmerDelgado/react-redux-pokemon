import React from "react";
import { Paper } from "@material-ui/core";
import HeaderFilter from "./HeaderFilter";
import TableList from "./TableList";
import HeaderFilterContainer from "./HeaderFilterContainer";
import TableListContainer from "./TableListContainer";

const PageContainer = () => {
  return (
    <Paper>
      <HeaderFilterContainer />
      <TableListContainer />
    </Paper>
  );
};

export default PageContainer;
