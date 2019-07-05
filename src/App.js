import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

import Home from "./screens/Home";
import ResearchArea from './screens/ResearchArea';
import Search from './screens/Search';
import AppBar from './components/AppBar';

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

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleTitle = (newTitle) => {
    setTitle(newTitle)
    document.title = title
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar title={title}>
          <Route exact path='/' render={() => <Home search={search} handleSearch={handleSearch} setTitle={handleTitle} />} />
          <Route path='/area-do-pesquisador' render={() => <ResearchArea setTitle={handleTitle} />} />
          <Route path='/buscar-pesquisador' render={() => <Search search={search} setTitle={handleTitle} />} />
        </AppBar>
      </Router>
    </ThemeProvider>
  );
}
