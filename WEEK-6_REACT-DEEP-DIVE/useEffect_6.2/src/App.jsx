import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json);
      })
    }, [] )
    
    
    return (
      <>

      {
        todos.length > 0 ? (<Todos title={todos[0].title} description={todos[0].content}/>) : <p>loading...</p>
      }

    </>
  )
}

function Todos( {title, description}){
  return (
    <>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </>
  )
}

export default App
