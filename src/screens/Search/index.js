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
import ResultCard from '../../components/ResultCard';


const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
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

const results = [
  {nome: "Rendrikson Oliveira", titulacao: "Doutor", area:"Ti", universidade: "UFAL"},
  {nome: "henrique Couto", titulacao: "Doutor", area: "TI", universidade: "UFAL"},
  {nome: "Gabriel Roberto", titulacao: "Doutor", area: "TI", universidade: "UFAL"},
  {nome: "Carlos", titulacao: "Mestre", area: "Engenharia", universidade: "UFPE"},
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
    <>
    <Grid className={classes.root} container>
      <Grid item xs={4} sm >
        <Typography style={{ margin: 10 }}>
          1000 Pesquisadores encotrados
          </Typography>
      </Grid>
      <Grid item >
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
    </Grid>
    <Grid container>
    {results.map((value, index) => <ResultCard value={value}/> )}
    </Grid>
    </>
  )
}
