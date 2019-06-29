import React, { useState } from 'react';
import { Paper, Typography, Grid, InputBase, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 10),
    margin: theme.spacing(3, 2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  icon: {
    fontSize: 80,
  },
  paperInput: {
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,

  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  error: {
    color: theme.palette.error.light,
  }
}))

export default function Search() {
  const classes = useStyle()

  const [search, setSearch] = useState("");
  const [error, setError] = useState({ active: false, type: '' });

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const makeSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      setError({ active: true, type: 'Você precisa inserir algo' });
    } else if (search === "Henrique") {
      setError({ active: true, type: `Pesquisador ${search} não existe` })
    } else {
      setError({ active: false });
      alert(`Buscando pesquisador: ${search}`);
    }
  }

  return (
    <Paper className={classes.root}>

      <Grid container direction="column" spacing={6} alignItems="center">
        <Grid item>
          <Grid container spacing={6} alignItems="center" justify="center">
            <SearchIcon className={classes.icon} />
            <Grid item>
              <Typography variant="h3" component="h2">
                Buscar Pesquisador
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" alignItems='center'>
            <Typography variant="body1">
              Mussum Ipsum, cacilds vidis litro <b>abertis.</b>
            </Typography>
            <Typography variant="body1">
              Per aumento de <b>cachacis</b>, eu reclamis.
            </Typography>
          </Grid>
        </Grid>

        <Grid item style={{ width: '85%' }}>
          <form onSubmit={makeSearch}>
            <Paper className={classes.paperInput}>
              <IconButton className={classes.iconButton} aria-label="Search" onClick={makeSearch}>
                <SearchIcon style={{ fontSize: 60, }} />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Nome, Área de conhecimento ou Titulação"
                inputProps={{ 'aria-label': 'Nome, Área de conhecimento ou Titulação' }}
                value={search}
                onChange={handleChange}
              />
            </Paper>
          </form>
          {error.active && <Grid container justify='center' style={{ marginTop: 10 }}>
            <Typography variant='body2' className={classes.error}>Erro: {error.type}</Typography>
          </Grid>}
        </Grid>
      </Grid>
    </Paper>
  )

}