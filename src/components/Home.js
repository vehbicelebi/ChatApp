import React from 'react'
import Sidebar from './Sidebar'
import Chatfield from './Chatfield'
import Input from './Input';
import Chatdesign from './chatbot/Chatdesign';


function Home(){
    
    return(
        <div>
            <div className='home'>
                <div className='container'>
                    <Sidebar />   
                        
                    <Chatfield />
                
                    
            
                </div>
            </div>
            {/*<Chatdesign />*/}
            <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/6bf1f473-37b6-4ab0-8a81-7e36b08b9c7c"></iframe>
            
        </div>
    );
    
}

export default Home