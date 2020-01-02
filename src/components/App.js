import React, { useState } from "react";
import { GameContext } from "../contexts";
// Firebase
import { db } from "../firebase"
// Router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ContextRoute from "./ContextRoute";
// Material-UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// Components
import Header from './Header';
import Toppage from './Toppage';
import Single from './Single';
import Room from './Room';
import About from './About';
import Field from "./Field";
import Test from "./Test";
// Other
import { useFieldStyles } from "../styles";

// const darkTheme = createMuiTheme({
//   palette: { type: 'dark' }
// });

function App() {
  const fieldClasses = useFieldStyles();
  const [gameState, setGameState] = useState({
    wasStarted: false,
    wasEnded: false,
    deck: [],
    discards: [],
    players: [
      // {
      //   id: null, name: "", hand: [],
      //   drew: { id: null, name: "" }
      // },
    ],
  })
  return (
    <ThemeProvider /*theme={darkTheme}*/>
      {/* <Header /> */}
      <CssBaseline />
      <Container fixed>
        <Box display="flex" justifyContent="center" m={2} >
          <Box className={fieldClasses.baseField}>
            <Router>
              <Switch>
                <Route exact path="/" component={Toppage} />
                <Route path="/single" component={Single} />
                <Route path="/room" component={Room} />
                <Route path="/about" component={About} />
                <ContextRoute
                  path="/test"
                  component={Field}
                  provider={GameContext.Provider}
                  value={gameState}
                />
                <Route path="*" ><Redirect to="/" /></Route>
              </Switch>
            </Router>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
