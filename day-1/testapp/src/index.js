import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // you can also do it without wrapping in React.StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);