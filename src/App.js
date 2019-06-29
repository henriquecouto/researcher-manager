import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import AppBar from "./components/AppBar";
import Description from "./components/Description";
import Search from "./components/Search";
import Header from "./components/Header";

import background from './assets/header.jpeg';

const useStyle = makeStyles(theme => ({
  header: {
    backgroundImage: `url(${background})`,
    marginBottom: -100,
    padding: theme.spacing(40, 0),
  },
  grid: {
    margin: 'auto',
    maxWidth: 1500,
  },
}));

function App() {
  const classes = useStyle();

  return (
    <>
      <AppBar title="Cadastro de Pesquisadores" />
      <Grid container className={classes.header} justify='center'>
        <Header />
      </Grid>
      <Grid container className={classes.grid} direction='column' justify='center'>
        <Grid item >
          <Description />
        </Grid>
        <Grid item id='search'>
          <Search />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
