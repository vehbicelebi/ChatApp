import React from 'react'
import Avatar from '@mui/material/Avatar';

function Chats(){
    return(
        <div className='chats'>
            <div className='userChat'>
                <div className='oneChatContainer'>
                    <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
                    <div>
                        <span className='chatName'>Vehbi</span>
                        <p className='chatMessage'>Hello</p>
                    </div>
                </div>
                <div className='oneChatContainer'>
                    <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
                    <div>
                        <span className='chatName'>Nesrin</span>
                        <p className='chatMessage'>Hallo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chats;