import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { Person as PersonIcon, Search as SearchIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Header(props) {
  const { title } = props;

  const classes = useStyles();

  const log = name => () => {
    console.log(name);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6" color="inherit">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={log("areaPesquisador")}>
                <PersonIcon />
                Área do Pesquisador
              </Button>
              <Button onClick={log("buscarPesquisador")}>
                <SearchIcon />
                Buscar Pesquisador
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
