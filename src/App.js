import React from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Description from "./components/Description";
import Search from "./components/Search";

const useStyle = makeStyles(theme => ({
  root: {
    margin: 'auto',
    marginTop: 70,
    maxWidth: 1500,
  },
}));

function App() {
  const classes = useStyle();

  return (
    <>
      <Header title="Cadastro de Pesquisadores" />
      <Grid container className={classes.root} direction='column' justify='center'>
        <Grid item >
          <Description />
        </Grid>
        <Grid item >
          <Search />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
