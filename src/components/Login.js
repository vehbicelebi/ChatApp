import React, { useState } from 'react';
import { Button } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth} from '../firebase';




function Login(){
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        const email = e.target[0].value;
        const password = e.target[1].value;
        e.preventDefault(); // Damit die Seite nicht neu lädt wenn man auf den Button drückt. So verliert man nicht die states von email und password
        signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    }

    return(
            <div className="formContainer">
                <form onSubmit={signIn}>
                    <p className='registration'>Sign up</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' value={email}/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' value={password}/>
                    <Button sx={{marginTop: "5px"}}  className="signButton" variant="contained" type='submit'>Sign up</Button>
                    <p className='logIfAcc'>You don't have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        
    );
}

export default Login