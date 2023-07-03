import React, { useState } from 'react';
import { Button } from '@mui/material';
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault(); // Damit die Seite nicht neu lädt wenn man auf den Button drückt. So verliert man nicht die states von email und password
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
    }

    return(
            <div className="formContainer">
                <form onSubmit={signIn}>
                    <p className='registration'>Sign up</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' value={password}/>
                    <Button sx={{marginTop: "5px"}}  className="signButton" variant="contained" type='submit'>Sign up</Button>
                    <p className='logIfAcc'>You don't have an account? <a href='https://www.google.com/'>Register</a></p>
                </form>
            </div>
        
    );
}

export default Login