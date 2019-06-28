import React from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Description from "./components/Description";

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyle();

  return (
    <>
      <Header title="Cadastro de Pesquisadores" />
      <Grid container className={classes.root}>
        <Grid item xs={11}>
          <Description />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
