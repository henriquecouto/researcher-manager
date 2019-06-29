import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

import Home from "./screens/Home";
import ResearchArea from './screens/ResearchArea';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#4f5d73'
    },
    error: { light: '#ef9a9a', main: '#f44336' },
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/area-do-pesquisador' component={ResearchArea} />
      </Router>
    </ThemeProvider>
  );
}
