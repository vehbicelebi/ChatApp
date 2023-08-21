import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, doc, getDoc} from "firebase/firestore";
import { db } from "../firebase"
import Avatar from '@mui/material/Avatar';
import {AuthContext} from "../context/AuthContext"
import { updateDoc, serverTimestamp } from "firebase/firestore";

function SearchUser(){
    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");

    const { currentUser } = useContext(AuthContext)

    const handleSearch = async () => {
        const q = query(collection(db, "users"),
        where("userName", "==", username)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUser(doc.data());
        });
    };
 
    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    }

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        const res = await getDoc(doc(db, "chats", combinedId));

        if (!res.exists()) {
            await setDoc(doc(db,"chats", combinedId),{messages: []});

            await updateDoc(doc(db, "userChats", currentUser.uid),{
                [combinedId + ".userInfo"]: {
                    uid: user.uid,
                    userName: user.userName,

                },
                [combinedId + ".date"]: serverTimestamp(),
            });
            await updateDoc(doc(db, "userChats", user.uid),{
                [combinedId + ".userInfo"]: {
                    uid: currentUser.uid,
                    userName: currentUser.userName,

                },
                [combinedId + ".date"]: serverTimestamp(),
            });

        }
        setUser(null);
        setUsername("")
    }
    

    return(
        <div className='SearchedUser'>
            <div className='searchBar'>
                <input onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username} className="inputSearch" type='text' placeholder='Find a User'/>
            </div>
            {user && <div className='oneChatContainer' onClick={handleSelect}>
                <Avatar className="avatar" src="https://picsum.photos/seed/picsum/200/300"/>
                <div>
                    <span className='chatName'>{user.userName}</span>
                    <p className='chatMessage'>Hello</p>
                </div>
            </div>}
        </div>
    )
}

export default SearchUser;