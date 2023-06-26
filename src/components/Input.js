import React from 'react'
import { Button, colors } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';


function Input(){
    return(
        <div className='inputField'>
            <input className="inputChat" type='text' placeholder='Enter your text here'/>

            <div className='iconContainer'>
                <label for="file-input">
                    <AttachFileIcon sx={{cursor: "pointer"}}/>
                </label>
                <input id="file-input" type='file' />
            </div>

            <div className='iconContainer'>
                <label for="file-input">
                    <InsertPhotoIcon sx={{cursor: "pointer"}}/>
                </label>
                <input id="file-input" type='file' />
            </div>
            
            <Button sx={{backgroundColor: "#2E8B57", height: "35px", width: "75px"}}  className="signButton" variant="contained">Send</Button>
            
         </div>
    )
}

export default Input;