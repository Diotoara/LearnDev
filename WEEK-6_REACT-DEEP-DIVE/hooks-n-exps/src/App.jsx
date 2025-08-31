import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function Headder( {txt}) {
//   return(
//     <>
//       <h1>{txt}</h1>
//     </>
//   )
// }


function App() {
  const [txt, setTxt] = useState("this will tell you today's weather")

  function newHead(){
    setTxt("today's weather is " + Math.random()*10 +" ");
  }

  return (
    <>
      <button  onClick={newHead}>Click to change top</button>
      <br />
      {txt}
    </>
  )
}

export default App

