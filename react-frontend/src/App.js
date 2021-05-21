import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { LogoutPage } from "./Pages/LogoutPage";

import { Paper, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Paper style={{ height: "100vh", width: "100vw" }} square>
          <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/logout">
                <LogoutPage />
              </Route>
            </Switch>
          </Router>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
