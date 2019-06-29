import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";

import HomePersonIcon from "../../assets/HomePersonIcon.png";
import HomeSearchIcon from "../../assets/HomeSearchIcon.png";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 10),
    margin: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container direction="column" spacing={6}>
        <Grid item>
          <Grid container spacing={6} alignItems="center">
            <Grid item>
              <img src={HomeSearchIcon} alt="" />
            </Grid>
            <Grid item xs>
              <Typography variant="h5" component="h3" align="justify">
                Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é
                um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
                In elementis mé pra quem é amistosis quis leo. Não sou faixa
                preta cumpadi, sou preto inteiris, inteiris. Interagi no mé,
                cursus quis, vehicula ac nisi.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs>
              <Typography variant="h5" component="h3" align="justify">
                Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é
                um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
                In elementis mé pra quem é amistosis quis leo. Não sou faixa
                preta cumpadi, sou preto inteiris, inteiris. Interagi no mé,
                cursus quis, vehicula ac nisi.
                </Typography>
            </Grid>
            <Grid item>
              <img src={HomePersonIcon} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
