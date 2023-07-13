import React, { useContext, useEffect, useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

function Message({message}){

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
  
    const ref = useRef();
    
  
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);
    
    return(
        <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}` }>
        <div className='messageInfo'>
            <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
            {//<span className='whenMessageSent'>just now</span>
            }
        </div>
        <div className='messageContent'>
        
            <p>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
            
        </div>  
        </div>
    )
}

export default Message;

/*ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}` */