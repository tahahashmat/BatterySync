import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Devices from "./components/Devices";
import { Grid } from "@material-ui/core";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";

const useStyles = makeStyles({
  
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />

      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>

            <Devices />

        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}




export default App;
