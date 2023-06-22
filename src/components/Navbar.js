import React from 'react'
import { Button, colors } from '@mui/material';
import Avatar from '@mui/material/Avatar';

/*Navbar*/
function Navbar(){
    return(
        <div className='navbar'>
            <h3 className='appName'>ChatApp</h3>
            <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
            <Button sx={{backgroundColor: "#DC143C", height: "35px", width: "75px"}}  className="signButton" variant="contained">Logout</Button>
        </div>
    )
}

export default Navbar;

