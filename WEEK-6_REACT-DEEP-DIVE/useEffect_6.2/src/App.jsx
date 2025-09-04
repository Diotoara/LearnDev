import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [sum, SetSum] = useState(0);
  const [input, SetInput] = useState(0)


  let sum = useMemo( () => {
    let fin = 0;
    for(let i=1;i<=input;i++){
      fin = fin + i;
    }
    return fin;
  }, [input] )
 
  return (
    <>
      <input onChange={(e) => 
      SetInput(e.target.value)
      } type="text" />
      <Heasder num = {sum}/>
    </>

  )

  function Heasder( {num} ){
    return (
      <h4>Sum is {num} </h4>
    )
  }
}

export default App
