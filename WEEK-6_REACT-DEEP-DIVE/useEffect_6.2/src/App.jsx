import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  const [cnt, setCnt] = useState(0)

  useEffect( () => {
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json);
      })
    }, [cnt] )

    function incnt(){
      setCnt(cnt => cnt+1)
    }    
    
    //make a button of update todo which update todos, instead of reloading to update.


    return (
      <>
      <button onClick={incnt}>Click to update Todo</button>
      {todos.map(todo => <Todos title={todo.title} description={todo.content} />)}

    </>
  )
}

function Todos( {title, description}){
  return (
    <>
      <h1>{title}</h1>
      <h5>{description}</h5>
      <br />
    </>
  )
}

export default App
