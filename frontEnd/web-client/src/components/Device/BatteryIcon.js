import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { CircularProgressbar } from "react-circular-progressbar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  icon: {},
});

const BatteryIcon = (props) => {
  const classes = useStyles();

  const colour = props.battery >= 30 ? "#00ff00" : (props.battery > 10 ? "#ffff00" : "#ff0000");

  return (
    <CircularProgressbarWithChildren
      value={props.battery}
      className={classes.icon}
      styles={buildStyles({
        pathColor:  colour ,
        trailColor: "#2B2D2F"
      })}
    >
      <img
        style={{ width: 40, marginTop: -5 }}
        src="https://i.imgur.com/b9NyUGm.png"
        alt="doge"
      />
      <div style={{ fontSize: 12, marginTop: -5 }}>
        <strong>much</strong> {props.battery}%
      </div>
    </CircularProgressbarWithChildren>
  );
};

export default BatteryIcon;
