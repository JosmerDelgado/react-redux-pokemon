import React from "react";
import "./App.css";
import PageContainer from "./components/PageContainer";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  pageContainter: {
    width: "80%",
    minWidth: "300px",
    maxWidth: "1000px",
    margin: "20px auto"
  }
}));

function App() {
  const classes = useStyle();
  return (
    <div className={"App"}>
      <div className={classes.pageContainter}>
        <PageContainer />
      </div>
    </div>
  );
}

export default App;
