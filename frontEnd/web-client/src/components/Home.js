import React, { Fragment } from 'react'
import './Home.css'; 
import { Button } from "@material-ui/core";
import darkmodeName from '.././images/batterysync dark mode name .png';
import lightkmodeName from '.././images/batterysync light mode name.png';
import darkmodeLogo from '.././images/batterysync dark mode logo.png';
import lightmodeLogo from '.././images/batterysync light mode logo.png';



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