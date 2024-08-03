import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive");
  

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      {/* note: you could also pass colors as "black" or "#000" */}



      <div className="fixed bottom-[48px] inset-x-0 flex flex-wrap justify-center px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">

        <button onClick={()=> setColor('red') } className="outlilne-none px-4 py-2 rounded-full" style={{backgroundColor: "red"}}>Red</button>

        <button onClick={()=> setColor('blue') } className="outlilne-none px-4 py-2 rounded-full" style={{backgroundColor: "blue"}}>Blue</button>


        <button onClick={()=> setColor('olive') }className="outlilne-none px-4 py-2 rounded-full" style={{backgroundColor: "olive"}}>Olive</button>


        <button onClick={()=> setColor('black') }className="outlilne-none px-4 py-2 rounded-full text-white" style={{backgroundColor: "black"}}>Black</button>

        <button onClick={()=> setColor('white') } className="outlilne-none px-4 py-2 rounded-full border border-black" style={{background: "white"}}>White</button>

          
        </div>
      </div>

    </div>
    </>
  )
}

export default App


// note: onClick function needs a function as parameter and not the reference of function, therefore we use
// onClick = {() => setColor("xyx")} and we did not use something like: onClick = {setColor("xyz")}

