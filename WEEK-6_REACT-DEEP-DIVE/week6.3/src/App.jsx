import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  console.log("ek aur re-render")

  const [capita, setCapita] = useState({income:0})
  const [side, setSide] = useState({money:0})

  setTimeout( () => {
    setCapita({'income' : 300});
  },3000 );

  setTimeout( () => {
    setSide({'money' : 6000});
  },6000 );

  const total = (capita.income + side.money)


  return(
    <h3>you have a total of {total} money left in account.</h3>
  )

}





export default App
