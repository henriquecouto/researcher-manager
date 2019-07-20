import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  IconButton,
} from '@material-ui/core';
import {
  Person as PersonIcon,
  Search as SearchIcon,
  ArrowBack,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  children: {
    marginTop: 70,
  },
});

export default function Header(props) {
  const { title, children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center">
                {window.location.pathname !== '/' && (
                  <IconButton component={Link} to="/">
                    <ArrowBack />
                  </IconButton>
                )}
                <Typography variant="h6" color="inherit">
                  {title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button component={Link} to="/area-do-pesquisador">
                <PersonIcon />
                Área do Pesquisador
              </Button>
              <Button component={Link} to="/buscar-pesquisador">
                <SearchIcon />
                Buscar Pesquisador
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.children}>{children}</div>
    </div>
  );
}
