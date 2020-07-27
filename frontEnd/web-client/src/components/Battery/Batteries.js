import React, { Fragment, useEffect } from 'react'
//import {useBattery} from 'react-use';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import BatteryIcon from './BatteryIcon'




const useStyles = makeStyles({

    root: {
        height: "100%",
        color: "white",
        backgroundColor: "#313233",
        marginTop: "50px",
        width: "45%",
        marginBottom: 12,
        fontSize: 14,
        marginRight: "5%",

        
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },

  });



const Batteries = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

        useEffect(() => {

            fetch('https://us-central1-batterysync-89680.cloudfunctions.net/api/getAllBatteries').then(()=> {
            return console.log("dsf")
        }).catch((thing)=> {
            console.log(thing)
        })

          }, [])
        
    

    return (
        <Fragment> 
        <Grid container spacing = {6} >
        <Card className={classes.root}>
        <CardContent>
          <BatteryIcon/>
        <Typography className={classes.root} color="textSecondary" gutterBottom>
          Device
        </Typography>
        <Typography variant="h5" component="h2">
          Battery Level
        </Typography>
        <Typography className={classes.root} color="textSecondary">
          Expand
        </Typography>
        </CardContent>
        </Card>


        <Card className={classes.root}>
        <CardContent>
        <BatteryIcon/>
        <Typography className={classes.root} color="textSecondary" gutterBottom>
          Device
        </Typography>
        <Typography variant="h5" component="h2">
          Battery Level
        </Typography>
        <Typography className={classes.root} color="textSecondary">
          Expand
        </Typography>
        </CardContent>
        </Card>

            <Card className={classes.root}>
        <CardContent>
        <BatteryIcon/>
        <Typography className={classes.root} color="textSecondary" gutterBottom>
          Device
        </Typography>
        <Typography variant="h5" component="h2">
          Battery Level
        </Typography>
        <Typography className={classes.root} color="textSecondary">
          Expand
        </Typography>
        </CardContent>
        </Card>


        <Card className={classes.root}>
        <CardContent>
        <BatteryIcon/>
        <Typography className={classes.root} color="textSecondary" gutterBottom>
          Device
        </Typography>
        <Typography variant="h5" component="h2">
          Battery Level
        </Typography>
        <Typography className={classes.root} color="textSecondary">
          Expand
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        </Fragment>


    )
}
    
       

export default Batteries




















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
    