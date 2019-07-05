import React, { useEffect } from 'react';

import AppBar from '../../components/AppBar'
import { Paper } from '@material-ui/core';

export default function ResearchArea(props) {
  const { setTitle } = props
  useEffect(() => {
    setTitle('Área do Pesquisador')
  })
  return (
    <>
      <Paper></Paper>
    </>
  );
};