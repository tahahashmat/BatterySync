import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Devices from "./components/Devices";
import { Grid } from "@material-ui/core";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Device from "./components/Device/Device";

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/devices" component={Devices} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
