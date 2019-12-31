import React from "react";
// Firebase
import { db } from "../firebase"
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Material-UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// Components
import Header from './Header';
import Toppage from './Toppage';
import Field from "./Field";
// Other
import { useStyles } from "../styles";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <CssBaseline />
      <Container fixed>
        <Box display="flex" justifyContent="center" m={2} >
          <Typography component="div" className={classes.baseField}>
            <Router>
              <Route exact path="/" component={Toppage} />
              <Route path="/single" component={Field} />
              {/* <Toppage /> */}
              {/* <Field /> */}
            </Router>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
