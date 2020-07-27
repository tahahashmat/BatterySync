import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'



const useStyles = makeStyles({




})


const BatteryIcon = () => {

    return(
        <CircularProgressbarWithChildren value={33}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>much</strong> 66%
  </div>
</CircularProgressbarWithChildren>
    )
}

export default BatteryIcon;