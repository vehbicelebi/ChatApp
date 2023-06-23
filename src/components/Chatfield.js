import React from 'react'
import Messages from './Messages';
import Chatinfo from './Chatinfo';
import Input from "./Input"

function Chatfield(){
    return(
        <div>
        <Chatinfo />
        <div className='chatfield'>
        <Messages />
        {/*
        <div className='chatInfo'>
            <span id='chatInfoName'>Vehbi</span>
        </div>
        */}
        
            <div className='chatBubbleField'>
                
            </div>
        {/*
        <div className='inputField'>
            Inputfield
        </div>
        */}
        </div>
        <Input />
        </div>
    )
}

export default Chatfield;