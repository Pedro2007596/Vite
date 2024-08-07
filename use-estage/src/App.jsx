import './App.css'
import { useState } from 'react';

function App() {

const [contador, setContador] = useState(0)


  function handleClick(){
    setContador((contador)=>{
      contador + 1
    })
    console.log(contador);
  

  }

  return (
    <>
     <p>{contador}</p>
     <button onClick={handleClick}>aumentar</button>
    </>
  )
}

export default App
