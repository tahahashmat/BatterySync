import React, { Fragment } from 'react'
import './Home.css'; 
import { Button } from "@material-ui/core";
import darkmodeName from '.././assets/darkModeName.png';
import lightkmodeName from '.././assets/lightModeName.png';
import darkmodeLogo from '.././assets/darkModeLogo.png';
import lightmodeLogo from '.././assets/lightModeLogo.png';




const Home = () => {
    return (
    <Fragment>
    <div id= 'logodiv'>
    <img src={darkmodeLogo} id='logo'/>
   </div>
   <div id='buttondiv'>
    <Button class='buttonclass' >Log In</Button>
    <Button class='buttonclass'>Sign Up</Button>
  </div>
    </Fragment>
    )
}

export default Home