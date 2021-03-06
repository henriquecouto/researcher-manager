import React, { useEffect, useState } from "react";

import {
  Paper,
  Container,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import PersonalInfo from "./PersonalInfo";
import Abstract from "./Abstract";
import ProfessionalAdress from "./ProfessionalAdress";

export default function ResearchArea(props) {
  const { setTitle } = props;

  useEffect(() => {
    setTitle("Área do Pesquisador");
  }, [setTitle]);

  return (
    <Container>
      <Grid container direction="column" spacing={8}>
        <PersonalInfo />
        <Abstract />
        <ProfessionalAdress />
      </Grid>
    </Container>
  );
}
