import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function Chatinfo(){

    const {data} = useContext(ChatContext);
    return(
    <div className='chatInfo'>
        <span id='chatInfoName'>{data.user?.userName}</span>
    </div>
    );
}

export default Chatinfo;