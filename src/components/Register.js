import React from 'react';
import { Button } from '@mui/material';

function Register(){
    return(
            <div className="formContainer">
                <form>
                    <p className='registration'>Register</p>
                    <input type="text" placeholder='name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    {/*<input style={{display:"none"}}  type='file' id='fileForAvatar'/>
                    <label htmlFor='fileForAvatar'><UploadIcon /></label> */}
                    <Button className="signButton" variant="contained">Sign up</Button>
                    <p className='logIfAcc'>You do have an account? <a href='https://www.google.com/'>Login</a></p>
                </form>
            </div>
        
    );
}

export default Register