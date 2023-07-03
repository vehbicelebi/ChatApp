import React from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;