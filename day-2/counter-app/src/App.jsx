import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  

  // you can pass anything inside useState() such as true, false, '', "", "'mayank", {} etc

  let [counter, mayankCounter] = useState(14)   // two values are stored in the array: 0th elem -> counter-like 1st elem: function/method, eg SetCounter (name anything)

// let counter = 8; // this variable does not propagate in the UI therefore we use useState hook

 const addValue = () => {

  // counter = counter+1;    // but the value of counter does not update in UI even if you use {} for it
  
  // how to deal with this? ans: for this, we need react hooks
  counter = counter + 1;

  mayankCounter(counter);

  

 }


 const removeValue = () =>{
  
  counter = counter -1;
  


  
  mayankCounter(counter);
 }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value is: {counter}</h3>

      <br />
      <button
      onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
