import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// self: creating elements using the react syntax by ourselves and not using the component rendering method

const reactTestElem = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me to visit google'
)




ReactDOM.createRoot(document.getElementById('root')).render(
  
  // reactTestElem // if you want to render it, uncomment it
  <App/>
)
