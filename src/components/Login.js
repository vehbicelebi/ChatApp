import React from 'react';
import { Button } from '@mui/material';

function Login(){
    return(
            <div className="formContainer">
                <form>
                    <p className='registration'>Sign up</p>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    {/*<input style={{display:"none"}}  type='file' id='fileForAvatar'/>
                    <label htmlFor='fileForAvatar'><UploadIcon /></label> */}
                    <Button className="signButton" variant="contained">Sign up</Button>
                    <p className='logIfAcc'>You don't have an account? <a href='https://www.google.com/'>Register</a></p>
                </form>
            </div>
        
    );
}

export default Login