import React, { useState } from 'react';
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  Button,
  Avatar,
  TextField,
} from '@material-ui/core';


const useStyle = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 1000,
    },
    avatar: {
      width: 150,
      height: 150,
      fontSize: 75,
    },
  }));
  
  export default function PersonalInfo() {
    const [disabled, setDisabled] = useState(true);
  
    const classes = useStyle();
    return (
      <Paper className={classes.paper} elevation={4} style={{ marginTop: 60 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h4">Informações Pessoais</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setDisabled(!disabled)}
              >
                {disabled ? 'Editar' : 'Salvar'}
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" spacing={4}>
              <Grid item>
                    <TextField
                        multiline
                        rowsMax="4"
                        disabled={disabled}
                        className={classes.textField}
                        margin="normal"
                    />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  