import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import { AuthContextProvier } from './context/AuthContext';

/*
ReactDOM.render(
  <App />, document.getElementById("root")
);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvier>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvier>
);

