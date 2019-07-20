import React, { useEffect, useState } from 'react';

import {
  Paper,
  Container,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from './PersonalInfo';

export default function ResearchArea(props) {
  const { setTitle } = props;

  useEffect(() => {
    setTitle('Área do Pesquisador');
  }, [setTitle]);

  return (
    <Container>
      <Grid container direction="column" spacing={8}>
        <PersonalInfo />
        <Paper elevation={4}>Resumo de Atividades Profissionais</Paper>
        <Paper elevation={4}>Endereço Profissional</Paper>
      </Grid>
    </Container>
  );
}
