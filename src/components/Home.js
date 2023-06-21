import React from 'react'
import Sidebar from './Sidebar'
import Chatfield from './Chatfield'
import Input from './Input';

function Home(){
    return(
        <div className='home'>
            <div className='container'>
                <Sidebar />   
                             
                <Chatfield />
            

        
            </div>
        </div>
    );
}

export default Home