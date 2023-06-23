import React from 'react'
import Navbar from "./Navbar"
import SearchUser from './SearchUser';
import Chats from './Chats';


function Sidebar(){
    return(
    
        <div className='sidebar'>
            <Navbar />
            <SearchUser />

                <Chats />
            
        </div>
        
    )
}

export default Sidebar;

/*31:13 */