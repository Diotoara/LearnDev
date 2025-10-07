import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function useTodos() {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const json =  axios.get('https://jsonplaceholder.typicode.com/posts/3')
    .then(res => {
      setTodos(res.data);
      setLoading(false)
    })
  }, [])

  return {todos, loading}
}

function App() {

  const {todos,loading} = useTodos()

  if(loading){
    return(
      <h1>loading...</h1>
    )
  }
  return (
    <div>
      {todos.title}
    </div>
  );

}



function MyComponent(){
  useEffect(()=>{
    console.log("mounted")

    return() => {
      console.log("unmounted bish")
    }

  },[])

  return <div>
    From Inside of Mycomponent
  </div>

}

export default App
