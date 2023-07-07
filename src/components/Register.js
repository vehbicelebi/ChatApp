import React, { useState } from 'react';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';



function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const signUp = async (e) => {
        const userName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        e.preventDefault(); // Damit die Seite nicht neu lädt wenn man auf den Button drückt. So verliert man nicht die states von email und password
        const res = await createUserWithEmailAndPassword(auth, email, password)   
     
        // Add a new document in collection "cities"
        await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            userName,
            email
        });
        await setDoc(doc(db, "userChats", res.user.uid), {});
        navigate("/");
    }
  

    return(
            <div className="formContainer">
                <form onSubmit={signUp}>
                    <p className='registration'>Register</p>
                    <input type="text" placeholder='name'/>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email'/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password'/>
                    {/*<input style={{display:"none"}}  type='file' id='fileForAvatar'/>
                    <label htmlFor='fileForAvatar'><UploadIcon /></label> */}
                    <Button sx={{marginTop: "5px"}}  className="signButton" variant="contained" type='submit'>Sign up</Button>
                    <p className='logIfAcc'>You do have an account? <Link to="/logins">Login</Link></p>
                </form>
            </div>
        
    );
}

export default Register

/*<Button sx={{backgroundColor: "#DC143C", height: "35px", width: "75px"}}  className="signButton" variant="contained">Logout</Button>*/
/*1:02:28 */