import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Headder( {collor,txt}) {
  return(
    <>
      <h1 style={{
        color : collor,
        marginLeft : 10,
        }}>{txt}</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Headder collor="red" txt="hello world" />
      <Headder collor="blue" txt="this is aryan this side" />
    </>
  )
}

export default App

