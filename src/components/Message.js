import React from 'react'
import Avatar from '@mui/material/Avatar';


function Message(){
    return(
        <div className='message owner'>
        <div className='messageInfo'>
            <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
            <span className='whenMessageSent'>just now</span>
        </div>
        <div className='messageContent'>
        
            <p>Hello</p>
            
            </div>
            
            
        </div>
    )
}

export default Message;

