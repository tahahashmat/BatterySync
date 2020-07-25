import React, { Fragment } from 'react'
import './SignUp.css'; 
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import darkmodeName from '.././images/batterysync dark mode name .png';
import lightkmodeName from '.././images/batterysync light mode name.png';
import darkmodeLogo from '.././images/batterysync dark mode logo.png';
import lightmodeLogo from '.././images/batterysync light mode logo.png';


const SignUp = () => {

    return (
    <Fragment>
    <div id= 'logodiv'>
    <img src={darkmodeLogo} id='logo'/>
   </div>

   <form noValidate autoComplete="off">
   <TextField  id="outlined-basic" label="Email" variant="outlined" />
    <h1></h1>
    <TextField   label="Username" variant="outlined" />
    <h1></h1>
    <TextField   label="Password" variant="outlined" type='password' />
    </form>
    
    <div id='buttondiv'>
    <Button class='buttonclass'>Sign Up</Button>
    </div>
    </Fragment>
    )
}

export default SignUp