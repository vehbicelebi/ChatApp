import React from 'react'
import Navbar from "./Navbar"
import SearchUser from './SearchUser';
import Avatar from '@mui/material/Avatar';


function Sidebar(){
    return(
    
        <div className='sidebar'>
            <Navbar />
            <SearchUser />
            <div className='userChat'>
                <div className='oneChatContainer'>
                    <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
                    <span className='chatName'>Vehbi</span>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;