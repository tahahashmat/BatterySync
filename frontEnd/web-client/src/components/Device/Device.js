import React, { Fragment, useEffect } from "react";
//import {useBattery} from 'react-use';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import BatteryIcon from "./BatteryIcon";
import { wrap } from "module";

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "#313233",
    width: "45%",
    height: 200,
    margin: "30px 15px 30px 15px",
    minWidth: "350px",
    borderRadius: "20px",
  },

  batteryIcon: {
    width: 150,
    float: "right",
  },
  text: {
    float: 'left',
    maxWidth: '40%',
    paddingLeft: 20
  },
});

const Device = (props) => {
  const classes = useStyles();

  // useEffect(() => {
  //   fetch(
  //     "https://us-central1-batterysync-89680.cloudfunctions.net/api/getAllBatteries"
  //   )
  //     .then(() => {
  //       return console.log("dsf");
  //     })
  //     .catch((thing) => {
  //       console.log(thing);
  //     });
  // }, []);

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.text}>
            <Typography style={{ marginTop: "25px" }}>
              {props.data[0]}
            </Typography>
            <Typography  style={{ marginTop: "50px" }}>
              Updated {props.data[1].lastUpdate}
            </Typography>
          </div>

          <div className={classes.batteryIcon}>
            <BatteryIcon battery={props.data[1].level} />
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default Device;

// const batteryState = useBattery();

// if (!batteryState.isSupported) {
//     return (
//       <div>
//         <strong>Battery sensor</strong>: <span>not supported</span>
//       </div>
//     );
//   }

//   if (!batteryState.fetched) {
//     return (
//       <div>
//         <strong>Battery sensor</strong>: <span>supported</span> <br />
//         <strong>Battery state</strong>: <span>fetching</span>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
//       <strong>Battery state</strong>: <span>fetched</span> <br />
//       <strong>Charge level</strong>:&nbsp;&nbsp; <span>{ (batteryState.level * 100).toFixed(0) }%</span> <br />
//       <strong>Charging</strong>:&nbsp;&nbsp; <span>{ batteryState.charging ? 'yes' : 'no' }</span> <br />
//       <strong>Charging time</strong>:&nbsp;&nbsp;
//       <span>{ batteryState.chargingTime ? batteryState.chargingTime : 'finished' }</span> <br />
//       <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{ batteryState.dischargingTime }</span>
//     </div>
//   )
