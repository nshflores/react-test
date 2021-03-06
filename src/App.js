import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Layout from './components/Layout';
import Home from './components/Home';
import Map from './components/Map';
import Chart from './components/Chart'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from "./components/NotFound";

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const App = props => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/maps' component={Map} />
            <Route exact path='/chart' component={Chart} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Provider>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
