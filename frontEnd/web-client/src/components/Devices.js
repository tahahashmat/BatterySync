import React, { Fragment, useEffect } from "react";
//import {useBattery} from 'react-use';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { wrap } from "module";
import Device from "./Device/Device";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  
});

const Devices = () => {
  const classes = useStyles();

  const devicesData = {
    "Taha's Vibrator": {
      level: 69,
      lastUpdate: "Few Seconds Ago"
    },
    "Waleed's Juul": {
      level: 420,
      lastUpdate: "Few Seconds Ago"
    },
    "Zayyed's Deen": {
      level: 80,
      lastUpdate: "Few Seconds Ago"
    },
    "Tallie Dar's aAaaAAAaaaA": {
        level: 29,
        lastUpdate: "Few Seconds Ago"
    }
  };

  let entries = Object.entries(devicesData)

  

  console.log(entries) // this return an array of arrays [[key, value], [key, value]]


  let devices = []
  let id = 0

  for(const i of entries){
      
      devices.push(  <Device data={i} />  )
      id += 1
  }

  return (
    <Fragment style={{justifyContent: "center"}}>
      <Navbar/>
      <Grid container >
        {devices}
      </Grid>
    </Fragment>
  );
};

export default Devices;
