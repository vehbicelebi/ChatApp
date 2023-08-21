import React from "react";
import { Button } from '@mui/material';




function Chatdesign(){

 


    return(
        <div className="chatbot">
            <div className="chatbot-top">
            <span className="chatbot-name">ChatBot</span>
            </div>
            <div className="chatbot-chatfield">
                <div className="chatbot-response">
                    Ich bin Vehbi!
                </div>
                <div className="userMessage">
                    <p>Hdsdsadasdasdassss</p>
                </div>
                <div className="chatbot-response">
                    deine mum
                </div>
                <div className="userMessage">
                    daijdoais
                </div>
            </div>
            <div className="chatbot-inputfield">
                <input type="text" placeholder="Type here..."/>
                <Button sx={{ marginTop:"13px", backgroundColor: "#2E8B57", height: "35px", width: "75px"}} className="signButton" variant="contained">Send</Button>
            
            </div>

        </div>
    );
}

export default Chatdesign;