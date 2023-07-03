import React, { useState } from 'react';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = (e) => {
        e.preventDefault(); // Damit die Seite nicht neu lädt wenn man auf den Button drückt. So verliert man nicht die states von email und password
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
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
                    <p className='logIfAcc'>You do have an account? <a href='https://www.google.com/'>Login</a></p>
                </form>
            </div>
        
    );
}

export default Register

/*<Button sx={{backgroundColor: "#DC143C", height: "35px", width: "75px"}}  className="signButton" variant="contained">Logout</Button>*/
