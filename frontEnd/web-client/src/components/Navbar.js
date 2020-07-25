import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import img1 from '.././assets/darkModeName.png';


const useStyles = makeStyles((theme) => ({ 
    
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
        

}))



const Navbar = () => {

    const classes = useStyles(); // and this


    const handleLogOut = () => {
        localStorage.removeItem('PASSWORD')
    }
     
    return (
 
  
  <div className={classes.root}>
        <AppBar position="static" style = {{backgroundColor: "#2B2D2F"}}>
          <Toolbar>
            <Typography variant="h3" className={classes.title} style = {{color: "#ffa303"}}>
                <img src = {img1} alt = "Company Name" width = "300px" align = "left"/>
            </Typography>
            <Button color = "inherit" style = {{color: "#ffa303"}} fontSize = "100" onClick = {handleLogOut} >Log Out </Button>
          </Toolbar>
        </AppBar>
        </div>
    
    )
}





export default Navbar