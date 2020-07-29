import React, { Fragment } from 'react'
import './LogIn.css'; 
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import darkmodeName from '.././assets/darkModeName.png';
import lightkmodeName from '.././assets/lightModeName.png';
import darkmodeLogo from '.././assets/darkModeLogo.png';
import lightmodeLogo from '.././assets/lightModeLogo.png';



const LogIn = () => {

    return (
    <Fragment>
    <div id= 'logodiv'>
    <img src={darkmodeLogo} id='logo'/>
   </div>

   <form noValidate autoComplete="off">
    
    <TextField  id="outlined-basic" label="Username" variant="outlined" />
    <h1></h1>
    <TextField  id="outlined-basic" label="Password" variant="outlined" type='password' />
    </form>
    
    <div id='buttondiv'>
    <Button class='buttonclass'>Log In</Button>
    </div>
    </Fragment>
    )
}

export default LogIn