import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import { AuthContextProvier } from './context/AuthContext';
import { ChatContextProvier } from './context/ChatContext';

/*
ReactDOM.render(
  <App />, document.getElementById("root")
);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvier>
    <ChatContextProvier>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ChatContextProvier>
  </AuthContextProvier>
);

