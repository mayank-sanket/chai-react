import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(


  // wrapping App component in React.StrictMode is optional

  <React.StrictMode>
    <App/>
  </React.StrictMode>
)


// notes:

/*
when you create an app using vite, you don't have testing libraries, react-scripts, and other dependencies directly installed therefore it is light-weight

since it does not have react-scripts, the javascript file is directly linked in the index.html file unlike the one in create-react-app
*/
