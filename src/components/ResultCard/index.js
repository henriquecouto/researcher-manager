import React from 'react';
import { Paper, Grid, ButtonBase, Typography } from '@material-ui/core';

import HomePersonIcon from '../../assets/HomePersonIcon.png'
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: 100,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 50,
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    }))

export default function ResultCard(props){
    const classes = useStyle();
    const {nome, area, titulacao, universidade} = props.value;
    return(
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Foto" src={HomePersonIcon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" color="textSecondary">
                  {nome}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {area}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {titulacao}
                </Typography>
                <Typography variant="body2">
                  {universidade}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}