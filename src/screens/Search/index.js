import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';

import HomePersonIcon from '../../assets/HomePersonIcon.png'

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

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,

  },
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Área de conhecimento',
  'Titulação',
  'Universidade',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Search(props) {
  const classes = useStyle();
  const { search, setTitle } = props;
  console.log(search)

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  useEffect(() => {
    setTitle('Buscando pesquisadores')
  })

  return (
    <div className={classes.root}>
      <Grid item xs={4} sm container>
        <Typography style={{ margin: 50 }}>
          1000 Pesquisadores encotrados
          </Typography>
      </Grid>
      <Grid item xs={4} sm container > {/*PROCURAR UMA FORMA DE DEIXAR O SELECT A DIREITA*/}
        <FormControl className={clsx(classes.formControl, classes.noLabel)}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<Input id="select-multiple-placeholder" />}
            renderValue={selected => {
              if (selected.length === 0) {
                return <em>Ordenar por:</em>;
              }

              return selected.join(', ');
            }}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>Organizar por:</em>
            </MenuItem>
            {names.map(name => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
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
                  Nome do Pesquisador
                        </Typography>
                <Typography variant="body2" gutterBottom>
                  Área de conhecimento
                        </Typography>
                <Typography variant="body2" gutterBottom>
                  Titulação
                        </Typography>
                <Typography variant="body2">
                  Universidade
                        </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
