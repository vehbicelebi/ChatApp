import React, { useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';



function Chats(){
    const [chats, setChats] = useState([]);
    const {currentUser} = useContext(AuthContext);
    useEffect(()=>{
        const getChats = () =>{
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
            return () => {
                unsub();
            };
        };
        currentUser.uid && getChats()
    },[currentUser.uid])

    return(
        <div className='chats'>
            {Object.entries(chats)?.map(chat =>(
            <div className='userChat' key={chat[0]}>
                <div className='oneChatContainer'>
                    <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
                    <div>
                        <span className='chatName'>{chat[1].userInfo.userName}</span>
                        <p className='chatMessage'>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default Chats;