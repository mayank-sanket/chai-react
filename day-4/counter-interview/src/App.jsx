import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [cnt, setcnt] = useState(0);
  const addValueFunction = ()=>{

    if(cnt==20) return;
    // cnt+=1; 

    // 3 times setcnt
    setcnt(cnt+1);
    setcnt(cnt+1);
    setcnt(cnt+1);

    // even after writing 3 times, the value increases only once in the UI
    
    // how to deal with this?

    // actually, you can pass a callback in setCount method | callback propagation is used for such tasks

    setcnt((prevCnt) => prevCnt+1);
    setcnt(prevcnt => prevcnt +1);
    setcnt(prev => prev+1); // name can be anything but recommended to use the same name everywhere
    

    // value increases by 4 | how ? 3 times due to the above code and 1 time due to the code setcnt(cnt=1)
  }

  const subValueFunction = ()=>{

    if(cnt == 0) return;
    // cnt-=1;
    setcnt(cnt-1);
  }
return(
  <>
  <h1>Counter Interview Question</h1>
  <h2>Counter current value is: {cnt}</h2>
  <button onClick={addValueFunction}>Add</button>

  <button onClick={subValueFunction}>Subtract</button>
  <h2>Current Value is: {cnt}</h2>

  
  </>
)
    
  
}

export default App
