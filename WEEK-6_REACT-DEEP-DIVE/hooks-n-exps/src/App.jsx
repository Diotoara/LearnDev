import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Todo({title, desc}){
  return(
    <>
      <h1>{title}</h1>
      {desc}
    </>
  )
}

function App() {

  const [todos, useTodos] = useState([{
    id: 1,
    title: "go to gym",
    desc: "from 8 to 10 am"
  }, {
    id: 2,
    title : "freshen up",
    desc : "from 6 to 7 am",
  }, {
    id:3,
    title:"have breakfast",
    desc : "from 7 to 8 am"
  }])

  return (
    <>    
      {/* {todos.map(todo => <Todo title={todo.title} desc={todo.desc} />)} */}
      {todos.map (function(todo){
        return <Todo title={todo.title} desc={todo.desc} />
      })}
    </>
  )
}

export default App

