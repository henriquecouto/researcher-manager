import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ResultCard from '../../components/ResultCard';

const order = {
  Titration: 'titration',
  Area: 'área',
  University: 'university',
};

const results = [
  {
    id: '1',
    name: 'Henrique Couto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '2',
    name: 'Rendrikson Oliveira',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '3',
    name: 'Gabriel Roberto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '4',
    name: 'Henrique Couto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '5',
    name: 'Rendrikson Oliveira',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '6',
    name: 'Gabriel Roberto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '7',
    name: 'Henrique Couto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '8',
    name: 'Rendrikson Oliveira',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '9',
    name: 'Gabriel Roberto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '10',
    name: 'Henrique Couto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '11',
    name: 'Rendrikson Oliveira',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
  {
    id: '12',
    name: 'Gabriel Roberto',
    titration: 'Doutor',
    area: 'Computação',
    university: 'UFAL',
  },
];

const useStyle = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const MySelect = ({ value, handleChange }) => {
  const classes = useStyle();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            // labelWidth={labelWidth}
            name="order"
            id="order"
          />
        }
      >
        <MenuItem value={order.Titration}>Titulação</MenuItem>
        <MenuItem value={order.University}>Universidade</MenuItem>
        <MenuItem value={order.Area}>Área do Conhecimento</MenuItem>
      </Select>
    </FormControl>
  );
};

export default function Search({ setTitle }) {
  const classes = useStyle();

  const [orderBy, setOrderBy] = useState(order.Titration);

  useEffect(() => {
    setTitle('Buscando Pesquisador');
  }, [setTitle]);

  const handleOrderBy = e => {
    setOrderBy(e.target.value);
  };

  return (
    <Container>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography>1000 pesquisadores encontrados</Typography>
        </Grid>
        <Grid item>
          <MySelect value={orderBy} handleChange={handleOrderBy} />
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row">
        {results.map(v => (
          <Grid item xs key={v.id}>
            <ResultCard value={v} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
