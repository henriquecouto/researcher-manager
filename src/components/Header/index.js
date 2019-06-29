import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  grid: {
    padding: theme.spacing(10, 10),
    margin: theme.spacing(3, 2),
    color: '#fff',
    textShadow: '2px 2px 10px #333'
  }
}))

export default function Header() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Typography variant='h1'>Cadastro de Pesquisadores</Typography>
      </Grid>
    </div>
  )
}