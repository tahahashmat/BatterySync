import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Batteries from './components/Battery/Batteries';
import { Grid } from "@material-ui/core";


const useStyles = makeStyles({
  


});



function App() { 
  const classes = useStyles();

  return (
    <div className="App">

      

      <Navbar/>
        

          <Grid container>
            <Grid item xs = {1}/>
          <Grid item xs = {10}>
          <Batteries/>
          </Grid>
          <Grid item xs = {1}/>
          </Grid>

        

      

      
    
    </div>

  );
}


/*todo components

 navbar t
 drawer w
 custom battery z
 

*/

export default App;
