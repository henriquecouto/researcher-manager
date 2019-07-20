import React from 'react';
import { Paper, Grid, ButtonBase, Typography } from '@material-ui/core';

import HomePersonIcon from '../../assets/HomePersonIcon.png';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  root: {
    minWidth: 400,
    padding: theme.spacing(2),
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      minWidth: 350,
    },
  },
}));

export default function ResultCard(props) {
  const classes = useStyle();

  const openResearcher = e => {
    console.log('Abrindo pesquisador');
  };

  const { name, area, titration, university } = props.value;

  return (
    <Paper onClick={openResearcher} className={classes.root} elevation={4}>
      <Grid container spacing={2}>
        <Grid item>
          <img src={HomePersonIcon} alt="Avatar" />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" style={{ overflow: 'hidden' }}>
                {name}
              </Typography>
            </Grid>
            <Grid item>{area}</Grid>
            <Grid item>{titration}</Grid>
            <Grid item>{university}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
