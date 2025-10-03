import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mycompo/>
    </>
  )
}

function Mycompo() {
  const [count, SetCount] = useState(0);

  const increment = () => {
    SetCount(count + 1);
  }

  return(
    <>
    <div>
      {count}
    </div>
    <button onClick={increment} >Click Me {"<uWu>"} </button>
    </>
  )

}

export default App
