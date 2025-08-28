import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Alltodos } from './components/AllTodos'

function App() {

//INCOMPLETE

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Alltodos></Alltodos>
    </div>
  )
}

export default App
