import React, { useContext, useState } from 'react'
import { Button, colors } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, updateDoc, arrayRemove, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Input(){

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const handleSend = async () => {
        if(img){
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    // Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );

        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
              text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
          });
      
          await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
              text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
          });

        setText("");
        setImg(null);

    }

    return(
        <div className='inputField'>
            <input value={text} onChange={(e)=>setText(e.target.value)}  className="inputChat" type='text' placeholder='Enter your text here'/>
            
            <div className='iconContainer'>
                <label htmlFor="file-input">
                    <AttachFileIcon sx={{cursor: "pointer"}}/>
                </label>
                <input onChange={(e) => setImg(e.target.files[0])}  id="file" type='file' />
            </div>

            <div className='iconContainer'>
                <label htmlFor="file-input">
                    <InsertPhotoIcon sx={{cursor: "pointer"}}/>
                </label>
                <input onChange={(e) => setImg(e.target.files[0])}  id="file-input" type='file' />
            </div>
            
            <Button onClick={handleSend} sx={{backgroundColor: "#2E8B57", height: "35px", width: "75px"}}  className="signButton" variant="contained">Send</Button>
            
         </div>
    )
}

export default Input;